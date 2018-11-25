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
        <form>
          <input id='user-input-field' autoFocus='autofocus' type='text' placeholder='Enter Location'/>
          <br/>
          <br/>
          <button id='user-submit-1'>Submit</button> -OR- <button id='user-submit-2'>Better Submit</button>
        </form>
      </div>
    )
  }
}

export default UserInput;
