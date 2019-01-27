import React from 'react';
import GodContainerCSS from '../assets/GodContainerCSS.css';
import Display from '../components/Display.js';
import UserInput from '../components/UserInput.js';
let location_id = "";
let cityName = "";
let countryName = "";
let cityTempAtScale = 0;
// let fetchedCity = {};
const APIKEY = "f617c0219a716da6b8495f3be12cbaf1";
// const display = document.getElementById('display');

class GodContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      textDisplayed: "Wow!! You're actually going outside for once!? Check the weather!",
      userSubmittedText: "",
      submissionErrorText: "",
      submissionError: false,
      submissionErrorNumber: 0,
      clickedBetterSubmit: false,
      clickedBetterSubmitNumber: 0,
      clickedBetterSubmitText: "",
      fetchedCity: undefined,
      weatherSassStatement: "Butthole!",
      FCtempSwitch: "F°",
      cityTempAtScale: undefined,
    }
  }
// FETCH BY CITY NAME (NOT ID) FOR NOW
  userSubmitsLocation = (event) => {
    // console.log("clicked!");
    if (this.state.userSubmittedText === "" || this.state.userSubmittedText === undefined) {
      this.setState({
        textDisplayed: "Please enter an actually city.....ya turd."
      })
      return
    }
    this.setState({
      submissionError: false,
      submissionErrorNumber: 0,
    })
    // let location_id = "5333180"
    // fetch(`http://api.openweathermap.org/data/2.5/weather?id=${location_id}&appid=${APIKEY}`)
    //   .then(res => res.json())
    //   .then(json => console.log("fetched!", json))
    let cityName = this.state.userSubmittedText
    // US ONLY FOR NOW
    // let countryName = "germany" //,${countryName}//
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`)
      .then(res => res.json())
      .then(json => this.saveCityInState(json))
  }

  // ADD MORE TEMPERATURE SUBSETS BELOW AND IN CSS
  changeDisplayBGcolor = () => {
    const display = document.getElementById('display');
    // console.log(this.state.fetchedCity);
    // console.log("hi", display);
    // if (city temp is cold, nice, warm, or hot) {
    //   toggleCSSclassname
    // }
    if (this.state.fetchedCity.main.temp <= 263) {
      display.classList.toggle('displayCold');
      // -10C
    } else if (this.state.fetchedCity.main.temp > 263 && this.state.fetchedCity.main.temp <= 278) {
      display.classList.toggle('displayCold');
      // up to 5C 40.7F
    } else if (this.state.fetchedCity.main.temp > 278 && this.state.fetchedCity.main.temp <= 286) {
      display.classList.toggle('displayCold');
      // up to 55F
    } else if (this.state.fetchedCity.main.temp > 286 && this.state.fetchedCity.main.temp <= 294) {
      display.classList.toggle('displayNice');
      // up to 70F
    } else if (this.state.fetchedCity.main.temp > 294 && this.state.fetchedCity.main.temp <= 300) {
      display.classList.toggle('displayNice');
     // up to 80F
    } else if (this.state.fetchedCity.main.temp > 300 && this.state.fetchedCity.main.temp <= 305) {
      display.classList.toggle('displayWarm');
    // up to 90F
    } else if (this.state.fetchedCity.main.temp > 305 && this.state.fetchedCity.main.temp <= 311) {
      display.classList.toggle('displayHot');
     // up to 100F
    } else if (this.state.fetchedCity.main.temp > 311 && this.state.fetchedCity.main.temp <= 316) {
      display.classList.toggle('displayHot');
    // up to 110F
    } else if (this.state.fetchedCity.main.temp > 316) {
      display.classList.toggle('displayHot');
    // over 110F SUPER HOT WHAT IS WRONG WITH YOU!!?!?
    }
  }

////////////////

  changeTempKtoFC = () => {
    let cityTempAtScale = 0
    if (this.state.FCtempSwitch === "F°") {
      cityTempAtScale = this.state.fetchedCity.main.temp * 9/5 - 459.67
    } else if (this.state.FCtempSwitch === "C°") {
      cityTempAtScale = this.state.fetchedCity.main.temp - 273.15
    }
    let round = Math.round(cityTempAtScale);
    this.setState({
      cityTempAtScale: round
    })
  }
// UNFINISHED ADD THIS.SETSTATE IN EACH WITH NEW SASS STATEMENT REFLECTING THE TEMPERATURE
  changeSassStatement = () => {
    if (this.state.fetchedCity.main.temp <= 263) {
      this.setState({
        weatherSassStatement: "AWWWW HELL NO!! WHY ARE YOU HERE!?!?....damn it cold, bro....it cold."
      })
      // -10C FREEZING WHY TO YOU LIVE OR VISIT HERE
    } else if (this.state.fetchedCity.main.temp > 263 && this.state.fetchedCity.main.temp <= 278) {
      this.setState({
        weatherSassStatement: "It's pretty fucking cold honestly."
        // "It's pretty fucking cold honestly. You should defintely wear a jacket or coat or something."
      })  // up to 5C 40.7F
    } else if (this.state.fetchedCity.main.temp > 278 && this.state.fetchedCity.main.temp <= 286) {
      this.setState({
        weatherSassStatement: "It's a bit chilly, lite jacket or hoodie should be fine."
        // "It's a bit chilly, lite jacket or hoodie should be fine, but ya know don't blame me if we get there and you're like 'It's too cold!!' so just do whatever I guess."
      })  // up to 55F
    } else if (this.state.fetchedCity.main.temp > 286 && this.state.fetchedCity.main.temp <= 294) {
      this.setState({
        weatherSassStatement: "Hey it's actually pretty nice out!.....hmmm...."
      })  // up to 70F
    } else if (this.state.fetchedCity.main.temp > 294 && this.state.fetchedCity.main.temp <= 300) {
      this.setState({
        weatherSassStatement: "It's a bit toasty."
      })  // up to 80F
    } else if (this.state.fetchedCity.main.temp > 300 && this.state.fetchedCity.main.temp <= 305) {
      this.setState({
        weatherSassStatement: "Yeah, it's hot outside."
      })  // up to 90F
    } else if (this.state.fetchedCity.main.temp > 305 && this.state.fetchedCity.main.temp <= 311) {
      this.setState({
        weatherSassStatement: "Damn bro, it's fuckin' hot outside."
      })  // up to 100F
    } else if (this.state.fetchedCity.main.temp > 311 && this.state.fetchedCity.main.temp <= 316) {
      this.setState({
        weatherSassStatement: "Dude! What the hell!? (pun intended) It's ridiculously hot outside. Blast that A/C bro!"
      })  // up to 110F
    } else if (this.state.fetchedCity.main.temp > 316) {
      this.setState({
        weatherSassStatement: "** removes glasses ** ....my God......am I in the center of the Sun?"
      })  // over 110F SUPER HOT WHAT IS WRONG WITH YOU!!?!?
    }
  }

///// NOT DEFINED ISSUE!! (needed this. in front *duh!*)

  saveCityInState = (city) => {
    this.setState({
      fetchedCity: city
    })
    this.changeTempKtoFC();
    this.changeSassStatement();
    this.changeDisplayBGcolor();
  }

// ADD SASS AND EXTRA BUTTONS LATER
  userBetterSubmits = (event) => {
    this.setState({
      submissionError: false,
      submissionErrorNumber: 0,
      textDisplayed: "Really bro? Regular submit isn't good enough? Jerk."
    })
  }

// when pressed numbererror to 0 and error false

  getUserInput = (event) => {
    this.setState({
      userSubmittedText: event.target.value
    });
  }
//////WORKING ON BETTER SUBMIT RESPONSES/////////

///////////////

// EASILY ADD ADDITIONAL SASS STATEMENTS AT THE BOTTOM OF THIS FUNCTION
  userPressingEnterToSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submissionError: true
    })
    switch (this.state.submissionErrorNumber) {
      case 0:
        this.setState({
          submissionErrorText: "Hey! Yeah, enter doesn't work here. You gotta click a submit button.",
          submissionErrorNumber: 1
        })
        break;
      case 1:
        this.setState({
          submissionErrorText: "No, you can't press enter to submit. You gotta click a button. Capisce?",

        submissionErrorNumber: 2
        })
        break;
      case 2:
        this.setState({
          submissionErrorText: "Buddy! Hey buddy, listen. You're not hearing me, you can't press enter to submit. The enter button WILL NOT work. Please CLICK A BUTTON to submit.",
          submissionErrorNumber: 3
        })
        break;
      case 3:
        this.setState({
          submissionErrorText: "CLICK. A. BUTTON.",
          submissionErrorNumber: 4
        })
        break;
      case 4:
        this.setState({
          submissionErrorText: "Stop.",
          submissionErrorNumber: 5
        })
        break;
      case 5:
        this.setState({
          submissionErrorText: "Seriously, stop. You're being a dick.",
          submissionErrorNumber: 6
        })
        break;
      case 6:
        this.setState({
          submissionErrorText: "....",
          submissionErrorNumber: 7
        })
        break;
      case 7:
        this.setState({
          submissionErrorText: "fuck you.",
        })
        break;
    }
  }

  toggleTempScale = () => {
    if (this.state.FCtempSwitch === "F°") {
      this.setState({
        FCtempSwitch: "C°"
      }, this.changeTempKtoFC())
    } else {
      this.setState({
        FCtempSwitch: "F°"
      }, this.changeTempKtoFC())
    }
  }


  render() {
    return(
      <div id='god-container'>
        <Display textDisplayed={this.state.textDisplayed} fetchedCity={this.state.fetchedCity} weatherSassStatement={this.state.weatherSassStatement} FCtempSwitch={this.state.FCtempSwitch} cityTempAtScale={this.state.cityTempAtScale}/>
        <br/>
        <UserInput getUserInput={this.getUserInput} userPressingEnterToSubmit={this.userPressingEnterToSubmit} userBetterSubmits={this.userBetterSubmits} submissionError={this.state.submissionError} submissionErrorText={this.state.submissionErrorText} userSubmitsLocation={this.userSubmitsLocation} clickedBetterSubmit={this.state.clickedBetterSubmit} clickedBetterSubmitText={this.state.clickedBetterSubmitText} FCtempSwitch={this.state.FCtempSwitch} toggleTempScale={this.toggleTempScale}/>
      </div>
    )
  }
}

export default GodContainer;
