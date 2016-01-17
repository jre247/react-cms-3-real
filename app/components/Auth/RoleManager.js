import React from 'react';
import {_} from 'underscore';
import API from '../../API';
import AuthHelper from '../../helpers/AuthHelper';
import { createHistory } from 'history'

var self;

class RoleManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {roles: [], users: []};
    self = this;
  }

  componentDidMount() {
    var self = this;
    API.getAllUsers().then(function(users){
      self.setState({users: users});
    });
  }
  componentWillUnmount() {

  }
  selectUser(user, event){
    self.props.history.pushState(null, '/auth/role-manager/users/' + user.id);
  }

  render() {
    if(this.state.users.length == 0){
      return(
        <span />
      );
    }
    else{
      let nodes = this.state.users.map((user, index) => {
        return (
          <tr key={index} onClick={this.selectUser.bind(this, user)}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        );
      });

      return (
        <div className='Content-panel'>
          <div className="table-responsive">
            <table className="table role-manager">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="auth-table-body">
              {nodes}
            </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default RoleManager;
