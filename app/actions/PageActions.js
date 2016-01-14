import alt from '../alt';
import {assign} from 'underscore';

class PageActions {
  constructor() {
    this.generateActions(
      'updateAjaxAnimation',
      'getAllPagesSuccess'
    );
  }

  getAllPages() {
    $.ajax({
      url: '/api/pages'
    })
      .done((data) => {
        this.actions.getAllPagesSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getAllPagesFail(jqXhr);
      });
  }

}

export default alt.createActions(PageActions);
