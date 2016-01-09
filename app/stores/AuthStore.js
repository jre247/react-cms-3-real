import alt from '../alt';
import AuthActions from '../actions/AuthActions';
import {_} from 'underscore';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this.auth = {isAuthenticated: false, userRoles: [], allRoles: []};
    this.isPublisher = false;
    this.isAdmin = false;
    this.allRoles = [];
    this.ajaxAnimationClass = '';
  }

  getUserAuthenticationDataSuccess(authData) {
    this.auth = authData;
    this.allRoles = authData.allRoles;
    
    //TODO: put in utility
    //publisher roles are either "publisher" or "admin"
    var publisherRoles = [1, 2];
    var adminRoles = [2];

    var publisherRolesForUser = _.intersection(this.auth.userRoles, publisherRoles);
    if(publisherRolesForUser.length > 0){
      this.isPublisher = true;
    }

    var adminRolesForUser = _.intersection(this.auth.userRoles, adminRoles);
    if(adminRolesForUser.length > 0){
      this.isAdmin = true;
    }
  }

  getUserAuthenticationDataFail(jqXhr){
    onsole.log('getUserAuthenticationDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(AuthStore);
