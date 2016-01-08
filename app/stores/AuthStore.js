import alt from '../alt';
import AuthActions from '../actions/AuthActions';
import {_} from 'underscore';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this.auth = {isAuthenticated: false, userRoles: []};
    this.isPublisher = false;
    this.ajaxAnimationClass = '';
  }

  getUserAuthenticationDataSuccess(authData) {
    debugger;
    this.auth = authData;

    //TODO: put in utility
    //publisher roles are either "publisher" or "admin"
    var publisherRoles = [1, 2];

    var publisherRolesForUser = _.intersection(this.auth.userRoles, publisherRoles);
    if(publisherRolesForUser.length > 0){
      this.isPublisher = true;
    }
  }

  getUserAuthenticationDataFail(jqXhr){
    onsole.log('getUserAuthenticationDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(AuthStore);
