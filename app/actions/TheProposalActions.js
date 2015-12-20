import alt from '../alt';
import {assign} from 'underscore';
var pageId = 2;

class TheProposalActions {
  constructor() {
    this.generateActions(
      'getProposalDataSuccess',
      'getProposalDataFail',
      'saveProposalDataSuccess',
      'saveVProposalDataFail',
      //'updateContent',
      //'updateDescription',
      'updateAjaxAnimation'
    );
  }

  getProposalData() {
    console.log('getting page content for page: ' + pageId);
    $.ajax({
      url: '/api/pages/' + pageId
    })
      .done((data) => {
        console.log('getProposalDataSuccess(data)');
        this.actions.getProposalDataSuccess(data);
      })
      .fail(() => {
        this.actions.getProposalDataFail();
      });
  }

  saveProposalData(contents, history) {
    $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: {contents: contents}
      })
        .done((data) => {
          this.actions.saveProposalDataSuccess(data.message, history);
        })
        .fail((jqXhr) => {
          this.actions.saveProposalDataFail(jqXhr.responseJSON.message);
        });
  }


}

export default alt.createActions(TheProposalActions);
