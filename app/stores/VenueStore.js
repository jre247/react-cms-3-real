import alt from '../alt';
import VenueActions from '../actions/VenueActions';

class VenueStore {
  constructor() {
    this.bindActions(VenueActions);
    this.venue = {};
    this.ajaxAnimationClass = '';
  }

  onGetVenueData(data) {
    this.venue = data.venue;
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(VenueStore);
