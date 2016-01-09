import React from 'react';
import {_} from 'underscore';
import API from '../../API';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: {}, userRoles: []};
  }

  componentDidMount() {
    var self = this;
    API.getUser(this.props.params).then(function(viewmodel){
      self.setState({user: viewmodel.user, userRoles: viewmodel.userRoles});
    });
  }
  componentWillUnmount() {

  }

  render() {
    if(!this.state.user){
      return(
        <span />
      );
    }
    else{
      return(
        <label>{this.state.user.email}</label>
      );
    }
  }
}

export default User;
