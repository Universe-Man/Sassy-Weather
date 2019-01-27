import React from 'react';
import DisplayCSS from '../assets/DisplayCSS.css';

const Display = (props) => {

  return(
    <div id='display' className='display'>
      {(props.fetchedCity === undefined) ? (
        <React.Fragment>
          {props.textDisplayed}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h5>{props.weatherSassStatement}</h5>
          {props.fetchedCity.name} / {props.cityTempAtScale} {props.FCtempSwitch}
        </React.Fragment>
      )}
    </div>
  )
}

export default Display;
