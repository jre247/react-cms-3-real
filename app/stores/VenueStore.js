import alt from '../alt';
import VenueActions from '../actions/VenueActions';

class VenueStore {
  constructor() {
    this.bindActions(VenueActions);
    this.contentList = [];
    this.ajaxAnimationClass = '';
  }

  onGetVenueDataSuccess(data) {
    console.log('onGetVenueDataSuccess');
    if(data && data.length > 0){
      this.contentList = data;
    }
  }

  onGetVenueDataFail(jqXhr) {
    onsole.log('onGetVenueDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onSaveVenueDataSuccess(history) {
    history.pushState(null, '/venue');
  }

  onSaveVenueDataFail(jqXhr) {
    onsole.log('onSaveVenueDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(VenueStore);
