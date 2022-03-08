import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 300,
    height: 200,
    resizeMode: 'stretch',
  },
  stretch2: {
    width: 600,
    height: 200,
    resizeMode: 'stretch',
  },
});

const portfolio = () => {
  return (
    <div className="portfolioApp">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>
              Portfolio
            </h3>
            <h6>
              Please click on the picture to see useable app.
              Click on the name to go to the github page.
            </h6>
          </div>
          <div className="card-body col-md-12">
            <div id="projectColour" class="container-fluid">
              <div className="row">
                {/* Final Project */}
                {/* <div class="col"></div> */}
                <div className="col-12 .min-width-600-md">
                    <a href="https://sandoman19.github.io/Password-generater/">
                      <View style={styles.container}>
                        <Image
                          style={styles.stretch2}
                          source={require('../img/StoneAndCabinetOnline.png')}
                        />
                      </View>                                   
                    </a>
                    <p className="card-text" id="repo"><a id="projectName" href="https://github.com/Sandoman19/Password-generater/">Password Generater</a></p>
                </div>
                {/* <div class="col"></div> */}
              </div>
            </div>

            <br></br>
            <br></br>
            <br></br>   

            <div className="row">
              {/* First row of homework assignments */}
              <div className="col-md-1">
              </div>
              <div className="col-md-4">
                  <a href="https://sandoman19.github.io/Password-generater/">
                    <View style={styles.container}>
                      <Image
                        style={styles.stretch}
                        source={require('../img/PasswordGenerater.png')}
                      />
                    </View>                                   
                  </a>
                  <p className="card-text" id="repo"><a id="projectName" href="https://github.com/Sandoman19/Password-generater/">Password Generater</a></p>
              </div>

              <div className="col-md-1"></div>

              <div className="col-md-4">
                  <a href="https://sandoman19.github.io/guessing_game//">
                    <View style={styles.container}>
                      <Image
                        style={styles.stretch}
                        source={require('../img/GuessingGame.png')}
                      />
                    </View>                                   
                  </a>
                  <p className="card-text" id="repo"><a id="projectName" href="https://github.com/Sandoman19/guessing_game">API Code Quiz</a></p>
              </div>

              <div className="col-md-1"></div>

            </div>

            <br></br>
            <br></br>
            <br></br>
            {/* Second row of homework assignments */}
            <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-md-4">
                  <a href="https://sandoman19.github.io/WorkDayScheduler/">
                    <View style={styles.container}>
                      <Image
                        style={styles.stretch}
                        source={require('../img/WorkDayScheduler.png')}
                      />
                    </View>                                   
                  </a>
                  <p className="card-text" id="repo"><a id="projectName" href="https://github.com/Sandoman19/WorkDayScheduler/">WorkDay Scheduler</a></p>
              </div>

              <div className="col-md-1"></div>
              
              <div className="col-md-4">
                  <a href="https://vast-tor-30602.herokuapp.com/">
                    <View style={styles.container}>
                      <Image
                        style={styles.stretch}
                        source={require('../img/Estore.png')}
                      />
                    </View>                                   
                  </a>
                  <p className="card-text" id="repo"><a id="projectName" href="https://github.com/Sandoman19/Redux-Store">Reduc-Store</a></p>
              </div>

              <div className="col-md-1"></div>

            </div>
            <br></br>
            <br></br>
            <div className="row">
              
            </div>
            <br></br>
            <div className="gitProfile">
                <p>
									GitHub Profile: <a id="projectName" href="https://github.com/Sandoman19"> https://github.com/Sandoman19 </a>
								</p>
                <p>
									Linkedin Profile: <a id="projectName" href="https://www.linkedin.com/in/aaron-sandoman-sando/"> https://www.linkedin.com/in/aaron-sandoman-sando/ </a>
								</p>
                <p>
									Email Address: Aaron@Charactergroup.com.au
								</p>
                <p>
									Phone Number: 0423058203
								</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default portfolio