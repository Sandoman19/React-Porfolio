import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { View, Image, StyleSheet } from 'react-native';
// import "../../img/studentAvatar.jpg"

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  stretch: {
    width: 200,
    height: 300,
    resizeMode: 'stretch',
  },
});

const mainPage = () => {
  return (
    <div className="aboutApp">
      <div className="container">
        <div className="card">
          <div className="card-header">

            <h3>
              About Me
            </h3>

          </div>

          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <div className="row">

                <div className="col-md-3">
                  <View style={styles.container}>
                    <Image
                      style={styles.stretch}
                      source={require('../img/studentAvatar.jpg')}
                    />
                  </View>
                </div>

                <div className="col-md-8">

                  <p>Thank you for asking to look over my portfolio. Within this portfolio, you will find projects I have done.
                  My infatuation with coding started when I was introduced to a program called Cabinet Vision. Once I began to learn how to use the program, 
                  I noticed that you could make UCS's (user constructed standards).</p> 

                  <p>By looking at what other people had made and trial and error, I learned how to make my own UCSs. 
                  After about six years of doing this, my boss asked me to look into being able to code websites and other programming. From that, I found a course at UWA Coding Boot Camp.</p>

                  <p>Now that I have completed the program, if you view the portfolio page you will see some of the projects I have completed.
                    With what I learned, I will be making an online store where you can buy offcuts of materials from Character Group, the company I work for.
                  </p>

                </div>

              </div>
            </blockquote>
          </div>
        </div>
      </div>

    </div>
  )
}

export default mainPage