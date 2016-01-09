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
    API.getRoleManagerViewmodel().then(function(viewmodel){
      self.setState({users: viewmodel});
    });
  }
  componentWillUnmount() {

  }
  render() {
    debugger;
    let nodes = this.state.users.map((user, index) => {
      var isPublisher = AuthHelper.isUserPublisher(this.auth.userRoles);
      var isAdmin = AuthHelper.isUserAdmin(this.auth.userRoles);

      return (
        <tr>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>
            <input type="checkbox" value={isAdmin} />
          </td>
          <td>
            <input type="checkbox" value={isPublisher} />
          </td>
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
            <th>Admin</th>
            <th>Publisher</th>
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
