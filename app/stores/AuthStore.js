import alt from '../alt';
import AuthActions from '../actions/AuthActions';
import {_} from 'underscore';
import AuthHelper from '../helpers/AuthHelper';

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

    this.isPublisher = AuthHelper.isUserPublisher(this.auth.userRoles);
    this.isAdmin = AuthHelper.isUserAdmin(this.auth.userRoles);
  }

  getUserAuthenticationDataFail(jqXhr){
    onsole.log('getUserAuthenticationDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(AuthStore);
