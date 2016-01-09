import React from 'react';
import {_} from 'underscore';
import API from '../../API';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: {}}};
  }

  componentDidMount() {
    var self = this;
    API.getUser(this.props.params).then(function(user){
      self.setState({user: user});
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
