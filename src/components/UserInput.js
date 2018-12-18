import React from 'react';
import UserInputCSS from '../assets/UserInputCSS.css';

class UserInput extends React.Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return(
      <div id='user-input-div'>
        <form onSubmit={this.props.userPressingEnterToSubmit}>
          <input id='user-input-field' onChange={this.props.getUserInput}  autoFocus='autofocus' type='text' placeholder='Enter Location'/>
          <button id='f-to-c-temp-button' type='button' onClick={this.props.toggleTempScale}>{this.props.FCtempSwitch}</button>
          <br/>
          <br/>
          {(this.props.submissionError === false) ? ( null ) : (
            <React.Fragment>
              {this.props.submissionErrorText}
              <br/>
              <br/>
            </React.Fragment>
          )}
          <button id='user-submit-1' type='button' onClick={this.props.userSubmitsLocation}>Submit</button> -OR- <button id='user-submit-2' type='button' onClick={this.props.userBetterSubmits}>Better Submit</button>
          {(this.props.clickedBetterSubmit === false) ? ( null ) : (
            <React.Fragment>
              <br/>
              <br/>
              {this.props.clickedBetterSubmitText}
              <br/>
              <br/>
            </React.Fragment>
          )}
        </form>
      </div>
    )
  }
}

export default UserInput;
