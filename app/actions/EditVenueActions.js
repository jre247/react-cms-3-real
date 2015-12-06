import alt from '../alt';
import {assign} from 'underscore';

class EditVenueActions {
  constructor() {
    this.generateActions(
      'saveVenueDataSuccess',
      'saveVenueDataError',
      'updateAjaxAnimation'
    );
  }
  saveVenueData(contents) {
    var pageId = 2;
    console.log('saving venue data for page: ' + pageId);
    $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: { contents: contents }
      })
        .done((data) => {
          this.actions.saveVenueDataSuccess(data.message);
        })
        .fail((jqXhr) => {
          this.actions.saveVenueDataFail(jqXhr.responseJSON.message);
        });
  }

}

export default alt.createActions(EditVenueActions);
