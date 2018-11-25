import React from 'react';
import DisplayCSS from '../assets/DisplayCSS.css';

const Display = (props) => {
  return(
    <div id='display'>
      yay today!!
      <br/>
      {props.textDisplayed}
    </div>
  )
}

export default Display;
