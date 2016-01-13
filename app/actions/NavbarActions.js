import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
  constructor() {
    this.generateActions(
      'updateOnlineUsers',
      'updateAjaxAnimation',
      'getAllPagesSuccess'
    );
  }

  getAllPages() {
    $.ajax({
      url: '/api/pages'
    })
      .done((data) => {
        debugger;
        this.actions.getAllPagesSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getAllPagesFail(jqXhr);
      });
  }

}

export default alt.createActions(NavbarActions);
