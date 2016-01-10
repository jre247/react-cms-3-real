import React from 'react';
import {_} from 'underscore';
import API from '../../API';
import AuthHelper from '../../helpers/AuthHelper';

class RoleManagerUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: {}, isPublisher: false, isAdmin: false};
  }

  componentDidMount() {
    var self = this;
    API.getUser(this.props.params.id).then(function(viewmodel){
      var isAdmin = AuthHelper.isUserAdmin(viewmodel.userRoles);
      var isPublisher = AuthHelper.isUserPublisher(viewmodel.userRoles);

      self.setState({user: viewmodel.user, isAdmin: isAdmin, isPublisher: isPublisher});
    });
  }
  componentWillUnmount() {

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    var userRoles = [];
    if(this.state.isAdmin){
      userRoles.push(2); //TODO: get admin role id from helper
    }
    if(this.state.isPublisher){
      userRoles.push(1); //TODO: get publisher role id from helper
    }

    var userViewmodel = {user: this.state.user, userRoles: userRoles};
    
    API.saveUser(userViewmodel).then(function(){
      this.props.history.pushState(null, '/role-manager');
    });
  }

  onEmailChange(event){
    this.state.user.email = event.target.value;
    this.setState({user: this.state.user});
  }
  onAdminRoleChange(event){
    this.state.isAdmin = event.target.checked;
    this.setState({isAdmin: this.state.isAdmin});
  }
  onPublisherRoleChange(event){
    this.state.isPublisher = event.target.checked;
    this.setState({isPublisher: this.state.isPublisher});
  }

  render() {
    if(!this.state.user){
      return(
        <span />
      );
    }
    else{
      return(
        <div className='Content-panel'>
          <form action={"/api/users/" + this.props.params} method="post">
              <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={this.onEmailChange.bind(this)} />
              </div>

              <div className="form-group">
                  <label>Admin</label>
                  <input className="form-control" name="admin" type="checkbox" value={this.state.isAdmin} checked={this.state.isAdmin} onChange={this.onAdminRoleChange.bind(this)} />
              </div>

              <div className="form-group">
                  <label>Publisher</label>
                  <input className="form-control" name="publisher" type="checkbox" value={this.state.isPublisher} checked={this.state.isPublisher} onChange={this.onPublisherRoleChange.bind(this)} />
              </div>

              <button type="submit" className="btn btn-warning btn-lg" onClick={this.submit.bind(this)}>Save</button>
          </form>
        </div>
      );
    }
  }
}

export default RoleManagerUser;
