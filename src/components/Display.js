import React from 'react';
import DisplayCSS from '../assets/DisplayCSS.css';

const Display = (props) => {
  return(
    <div id='display'>
      {(props.fetchedCity === {}) ? (
        <React.Fragment>
      {props.textDisplayed}
        </React.Fragment>) : (
          <React.Fragment>
        {props.fetchedCity.name}
        </React.Fragment>
      )}
    </div>
  )
}

export default Display;
