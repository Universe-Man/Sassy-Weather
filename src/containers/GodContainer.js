import React from 'react';
import GodContainerCSS from '../assets/GodContainerCSS.css';
import Display from '../components/Display.js';
import UserInput from '../components/UserInput.js';

class GodContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      textDisplayed: "oh my gerd!!"
    }
  }

  render() {
    return(
      <div id='god-container'>
        <Display textDisplayed={this.state.textDisplayed}/>
        <br/>
        <UserInput />
      </div>
    )
  }
}

export default GodContainer;
