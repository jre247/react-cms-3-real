import alt from '../alt';
import {assign} from 'underscore';
var pageId = 3;

class ThingsToDoActions {
  constructor() {
    this.generateActions(
      'getThingsToDoDataSuccess',
      'getThingsToDoDataFail',
      'saveThingsToDoDataSuccess',
      'saveThingsToDoDataFail',
      'updateListItem',
      'handleAddListItem',
      'updateAjaxAnimation'
    );
  }

  getThingsToDoData() {
    console.log('getting page content for page: ' + pageId);
    $.ajax({
      url: '/api/pages/' + pageId
    })
      .done((data) => {
        console.log('getThingsToDoDataSuccess(data)');
        this.actions.getThingsToDoDataSuccess(data);
      })
      .fail(() => {
        this.actions.getThingsToDoDataFail();
      });
  }

  saveThingsToDoData(contents, history) {
    $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: {contents: contents}
      })
        .done((data) => {
          this.actions.saveThingsToDoDataSuccess(data.message, history);
        })
        .fail((jqXhr) => {
          this.actions.saveThingsToDoDataFail(jqXhr.responseJSON.message);
        });
  }


}

export default alt.createActions(ThingsToDoActions);
