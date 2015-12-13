import alt from '../alt';
import {assign} from 'underscore';
var pageId = 1;

class VenueActions {
  constructor() {
    this.generateActions(
      'getVenueDataSuccess',
      'getVenueDataFail',
      'saveVenueDataSuccess',
      'saveVenueDataFail',
      'updateName',
      'updateEventDate',
      'updateUrl',
      'updateCeremonyTime',
      'updateCocktailHourTime',
      'updateReceptionTime',
      'updateAfterPartyTime',
      'updateAjaxAnimation'
    );
  }

  getVenueData() {
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

  saveVenueData(contents, history) {
    $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: {contents: contents}
      })
        .done((data) => {
          this.actions.saveVenueDataSuccess(data.message, history);
        })
        .fail((jqXhr) => {
          this.actions.saveVenueDataFail(jqXhr.responseJSON.message);
        });
  }


}

export default alt.createActions(VenueActions);
