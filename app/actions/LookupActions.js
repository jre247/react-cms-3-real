import alt from '../alt';
import {assign} from 'underscore';

class LookupActions {
  constructor() {
    this.generateActions(
      'updateAjaxAnimation',
      'getAllLookupsSuccess'
    );
  }

  getLookups() {
    $.ajax({
      url: '/api/lookups'
    })
      .done((data) => {
        this.actions.getAllLookupsSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getAllLookupsFail(jqXhr);
      });
  }

}

export default alt.createActions(LookupActions);
