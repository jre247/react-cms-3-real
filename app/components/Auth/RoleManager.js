import React from 'react';
import {_} from 'underscore';

class RoleManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {roles: [], users: []};
  }

  componentDidMount() {
    API.getRoleManagerViewmodel().then(function(viewmodel){
      this.setState({roles: viewmodel.roles, users: viewmodel.users});
    });
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="container">
        Role Manager
      </div>
    );
  }
}

export default RoleManager;
