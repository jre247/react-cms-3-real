import alt from '../alt';
import {assign} from 'underscore';

class AuthActions {
  constructor() {
    this.generateActions(
      'getUserAuthenticationDataSuccess'
    );
  }

  getUserAuthenticationData() {
    $.ajax({
      url: '/api/users/loggedInUser'
    })
      .done((data) => {
        this.actions.getUserAuthenticationDataSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getUserAuthenticationDataFail(jqXhr);
      });
  }

}

export default alt.createActions(AuthActions);
