import React from 'react';
import {Link} from 'react-router';
import AuthStore from '../stores/AuthStore';

class AuthHeader extends React.Component {
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
        <nav className="navbar navbar-default auth-nav-container">
          <div className="container">
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link className="auth-link" to="/auth/role-manager">Role Manager</Link>
                </li>
                <li>
                  <Link className="auth-link" to="/admin/pages">Pages Administration</Link>
                </li>
                <li>
                  <Link className="auth-link" to="/admin/app-settings">App Settings</Link>
                </li>
                <li>
                  <Link className="auth-link" to="/admin/meals">Meals</Link>
                </li>
                <li className='pull-right'>
                  <Link className="auth-link" to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
    else{
      return (
        <span/>
      );
    }

  }
}

export default AuthHeader;
