import alt from '../alt';
import {assign} from 'underscore';

class VenueActions {
  constructor() {
    this.generateActions(
      'getVenueDataSuccess',
      'getVenueDataFail',
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

}

export default alt.createActions(VenueActions);
