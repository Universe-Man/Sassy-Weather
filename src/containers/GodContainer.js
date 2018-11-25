import React from 'react';
import GodContainerCSS from '../assets/GodContainerCSS.css';
import Display from '../components/Display.js';

class GodContainer extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div id='god-container'>
        yay today!
        <Display />
      </div>
    )
  }

}

export default GodContainer;
