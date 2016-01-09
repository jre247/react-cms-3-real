import React from 'react';
import {_} from 'underscore';
import API from '../../API';
import AuthStore from '../stores/AuthStore';
import AuthHelper from '../helpers/AuthHelper';

class RoleManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {roles: [], users: []};
    this.authState = AuthStore.getState();
  }

  componentDidMount() {
    var self = this;
    API.getAllUsers().then(function(users){
      self.setState({users: users});
    });
  }
  componentWillUnmount() {

  }
  render() {
    debugger;
    let nodes = this.state.users.map((user, index) => {
      return (
        <tr>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
        </tr>
      );
    });

    return (
      <div className="table-responsive">
        <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {nodes}
        </tbody>
        </table>
      </div>
    );
  }
}

export default RoleManager;
