import React from 'react';
import GodContainerCSS from '../assets/GodContainerCSS.css';
import Display from '../components/Display.js';
import UserInput from '../components/UserInput.js';
let location_id = ""
let cityName = ""
let countryName = ""
let cityTempAtScale = 0
// let fetchedCity = {}
const APIKEY = "f617c0219a716da6b8495f3be12cbaf1"

class GodContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      textDisplayed: "oh my gerd!!",
      userSubmittedText: "",
      submissionErrorText: "",
      submissionError: false,
      submissionErrorNumber: 0,
      clickedBetterSubmit: false,
      clickedBetterSubmitNumber: 0,
      clickedBetterSubmitText: "",
      fetchedCity: undefined,
      weatherSassStatement: "Actually going outside for once? Check the weather!",
      FCtempSwitch: "F°",
      cityTempAtScale: undefined,
    }
  }
// FETCH BY CITY NAME (NOT ID) FOR NOW
  userSubmitsLocation = (event) => {
    console.log("clicked!");
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

  changeTempKtoFC = () => {
    let cityTempAtScale = 0
    if (this.state.FCtempSwitch === "F°") {
      cityTempAtScale = this.state.fetchedCity.main.temp * 9/5 - 459.67
    } else {
      cityTempAtScale = this.state.fetchedCity.main.temp - 273.15
    }
    let round = Math.round(cityTempAtScale);
    this.setState({
      cityTempAtScale: round
    })
  }


///// NOT DEFINED ISSUE!!

  saveCityInState = (city) => {
    this.setState({
      fetchedCity: city
    })
    this.changeTempKtoFC();
  }

// ADD SASS AND EXTRA BUTTONS LATER
  userBetterSubmits = (event) => {
    console.log("butt");
    this.setState({
      submissionError: false,
      submissionErrorNumber: 0,
    })
  }

// when pressed numbererror to 0 and error false

  getUserInput = (event) => {
    this.setState({
      userSubmittedText: event.target.value
    }, () => {console.log("user in state", this.state.userSubmittedText)})
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
