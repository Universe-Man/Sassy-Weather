import React from 'react';
import GodContainerCSS from '../assets/GodContainerCSS.css';
import Display from '../components/Display.js';
import UserInput from '../components/UserInput.js';
let location_id = ""
const APIKEY = "f617c0219a716da6b8495f3be12cbaf1"
const APIURL = `api.openweathermap.org/data/2.5/forecast?id=${location_id}&APPID=${APIKEY}`

class GodContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      textDisplayed: "oh my gerd!!",
      userSubmittedText: "",
      submissionErrorText: "",
      submissionError: false,
      submissionErrorNumber: 0,
    }
  }

  userSubmitsLocation = (event) => {
    let location_id = "5333180"
    fetch()
  }




  getUserInput = (event) => {
    this.setState({
      userSubmittedText: event.target.value
    }, () => {console.log("user in state", this.state.userSubmittedText)})
  }

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


  render() {
    return(
      <div id='god-container'>
        <Display textDisplayed={this.state.textDisplayed}/>
        <br/>
        <UserInput getUserInput={this.getUserInput} userPressingEnterToSubmit={this.userPressingEnterToSubmit} submissionError={this.state.submissionError} submissionErrorText={this.state.submissionErrorText}/>
      </div>
    )
  }
}

export default GodContainer;
