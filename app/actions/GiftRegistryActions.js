import alt from '../alt';
import {assign} from 'underscore';
var pageId = 5;

class GiftRegistryActions {
  constructor() {
    this.generateActions(
      'getContentListDataSuccess',
      'getContentListDataFail',
      'saveContentListDataSuccess',
      'saveContentListDataFail',
      'updateAjaxAnimation'
    );
  }

  getContentListData() {
    console.log('getting page content for page: ' + pageId);
    $.ajax({
      url: '/api/pages/' + pageId
    })
      .done((data) => {
        console.log('getContentListDataSuccess(data)');
        this.actions.getContentListDataSuccess(data);
      })
      .fail(() => {
        this.actions.getContentListDataFail();
      });
  }

  saveContentListData(contents, history) {
    $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: {contents: contents}
      })
        .done((data) => {
          this.actions.saveContentListDataSuccess(data.message, history);
        })
        .fail((jqXhr) => {
          this.actions.saveContentListDataFail(jqXhr.responseJSON.message);
        });
  }


}

export default alt.createActions(GiftRegistryActions);
