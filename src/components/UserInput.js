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
          <br/>
          <br/>
          {(this.props.submissionError === false) ? ( null ) : (
            <React.Fragment>
              {this.props.submissionErrorText}
              <br/>
              <br/>
            </React.Fragment>
          )}
          <button id='user-submit-1' type='button' onClick={this.props.userSubmitsLocation}>Submit</button> -OR- <button id='user-submit-2' type='button'>Better Submit</button>
        </form>
      </div>
    )
  }
}

export default UserInput;
