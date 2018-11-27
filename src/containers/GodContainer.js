import React from 'react';
import GodContainerCSS from '../assets/GodContainerCSS.css';
import Display from '../components/Display.js';
import UserInput from '../components/UserInput.js';

class GodContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      textDisplayed: "oh my gerd!!",
      userSubmittedText: "",
      submissionErrorText: "",
      submissionError: false,
      submissionErrorText: 0,
    }
  }

  getUserInput = (event) => {
    this.setState({
      userSubmittedText: event.target.value
    }, () => {console.log("user in state", this.state.userSubmittedText)})
  }

  userPressingEnterToSubmit = (event) => {
    console.log("here");
    event.preventDefault();
    this.setState({
      submissionErrorText: "Hey! Yeah, enter doesn't work here. You gotta click a submit button."
    })

    // ADD MESSAGE OF RIDICULE LATER
  }


  render() {
    return(
      <div id='god-container'>
        <Display textDisplayed={this.state.textDisplayed}/>
        <br/>
        <UserInput getUserInput={this.getUserInput} userPressingEnterToSubmit={this.userPressingEnterToSubmit}/>
      </div>
    )
  }
}

export default GodContainer;
