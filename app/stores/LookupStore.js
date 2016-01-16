import alt from '../alt';
import LookupActions from '../actions/LookupActions';

class LookupStore {
  constructor() {
    this.bindActions(LookupActions);
    this.lookups = [];
    this.ajaxAnimationClass = '';
  }
  getAllLookupsSuccess(viewmodel){
    this.lookups = viewmodel.lookups;
  }

  getAllLookupsFail(jqXhr){
    onsole.log('getAllLookupsFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(LookupStore);
