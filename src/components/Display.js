import React from 'react';
import DisplayCSS from '../assets/DisplayCSS.css';

const Display = (props) => {
  return(
    <div id='display'>
      {(props.fetchedCity === undefined) ? (
        <React.Fragment>
          {props.textDisplayed}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h4>{props.weatherSassStatement}</h4>
          {props.fetchedCity.name}
          {props.fetchedCity.main.temp}

        </React.Fragment>
      )}
    </div>
  )
}

export default Display;
