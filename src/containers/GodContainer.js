import React from 'react';
import GodContainerCSS from '../assets/GodContainerCSS.css';
import Display from '../components/Display.js';
import UserInput from '../components/UserInput.js';

class GodContainer extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div id='god-container'>
        <Display />
        <UserInput />
      </div>
    )
  }
}

export default GodContainer;
