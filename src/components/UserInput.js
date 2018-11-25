import React from 'react';

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
          <input id='user-submit' type='submit' value='Submit' />
          <input id='user-submit-2' type='submit' value='Better Submit' />
        </form>
      </div>
    )
  }
}

export default UserInput;
