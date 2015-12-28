import alt from '../alt';
import TheProposalActions from '../actions/TheProposalActions';

class TheProposalStore {
  constructor() {
    this.bindActions(TheProposalActions);
    this.contentList = [];
    this.ajaxAnimationClass = '';
  }

  onGetProposalDataSuccess(data) {
    console.log('onGetProposalDataSuccess');
    if(data && data.length > 0){
      this.contentList = data;
    }
  }

  onGetProposalDataFail(jqXhr) {
    onsole.log('onGetProposalDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onSaveProposalDataSuccess(history) {
    history.pushState(null, '/our-story');

  }



  // onUpdateDescription(event) {
  //   this.proposal.description = event.target.value;
  //   //this.descriptionValidationState = '';
  //   //this.helpBlock = '';
  // }

  onSaveProposalDataFail(jqXhr) {
    onsole.log('onSaveProposalDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(TheProposalStore);
