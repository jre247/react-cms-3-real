import React from 'react';
import {Link} from 'react-router';
import AuthStore from '../stores/AuthStore';

class AuthLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = AuthStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AuthStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    if(this.state.isAdmin){
      return (
        <div>
          <div className='Navigation' role="navigation">
              <Link className="Navigation-link" to="/auth/role-manager">Role Manager</Link>
          </div>
          <div className='Navigation logout' role="navigation">
              <Link className="Navigation-link" to="/logout">Logout</Link>
          </div>
          <div className='Navigation logout' role="navigation">
              <Link className="Navigation-link" to="/admin/pages">Pages Administration</Link>
          </div>

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
