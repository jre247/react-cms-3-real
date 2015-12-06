import alt from '../alt';
import {assign} from 'underscore';

class VenueActions {
  constructor() {
    this.generateActions(
      'getVenueDataSuccess',
      'getVenueDataFail',
      'saveVenueDataSuccess',
      'saveVenueDataFail',
      'updateName',
      'updateDescription',
      'updateUrl',
      'updateCeremonyTime',
      'updateAjaxAnimation'
    );
  }

  getVenueData() {
    var pageId = 2;
    console.log('getting page content for page: ' + pageId);
    $.ajax({
      url: '/api/pages/' + pageId
    })
      .done((data) => {
        console.log('getVenueDataSuccess(data)');
        this.actions.getVenueDataSuccess(data);
      })
      .fail(() => {
        this.actions.getVenueDataFail();
      });
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

export default alt.createActions(VenueActions);
