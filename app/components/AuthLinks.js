import React from 'react';
import {Link} from 'react-router';
import AuthStore from '../stores/AuthStore';

class AuthLinks extends React.Component {
  constructor(props) {
    super(props);
    this.authState = AuthStore.getState();
  }

  render() {
    debugger;
    if(this.authState.isAdmin){
      return (
        <div className='Navigation' role="navigation">
            <Link className="Navigation-link" to="/role-manager">Role Manager</Link>
        </div>
      );
    }
    else{
      return (
        <span/>
      );
    }

  }
}

export default AuthLinks;
