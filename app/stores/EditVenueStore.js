import alt from '../alt';
import EditVenueActions from '../actions/EditVenueActions';

class EditVenueStore {
  constructor() {
    this.bindActions(EditVenueActions);
    this.venue = {};
    this.ajaxAnimationClass = '';
  }

  onSaveVenueDataSuccess(data) {
    console.log('onSaveVenueDataSuccess');

  }

  onSaveVenueDataFail(jqXhr) {
    onsole.log('onSaveVenueDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(EditVenueStore);
