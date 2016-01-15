import alt from '../alt';
import LookupActions from '../actions/ookupActions';

class LookupStore {
  constructor() {
    this.bindActions(LookupActions);
    this.lookups = [];
    this.ajaxAnimationClass = '';
  }
  getLookupsSuccess(viewmodel){
    this.lookups = viewmodel.lookups;
  }

  getLookupsFail(jqXhr){
    onsole.log('getLookupsFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(LookupStore);
