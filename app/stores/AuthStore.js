import alt from '../alt';
import AuthActions from '../actions/AuthActions';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this.isAuthenticated = false;
    this.ajaxAnimationClass = '';
  }

  getUserAuthenticationDataSuccess(authData) {
    this.isAuthenticated = authData.isAuthenticated;
  }

  getUserAuthenticationDataFail(jqXhr){
    onsole.log('getUserAuthenticationDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(AuthStore);
