import alt from '../alt';
import VenueActions from '../actions/VenueActions';

class VenueStore {
  constructor() {
    this.bindActions(VenueActions);
    this.name = '';
    this.description = '';
    this.ceremonyTime = '';
    this.url = '';
    this.ajaxAnimationClass = '';
  }

  onGetVenueDataSuccess(data) {
    console.log('onGetVenueDataSuccess');
    var contentItems = data;
    var venue = {
      name: contentItems[0].value,
      image: contentItems[1].value,
      description: contentItems[2].value,
      ceremonyTime: contentItems[3].value,
    }
    console.log('contentItems.length: ' + contentItems.length);
    console.log('contentItems[0]: ' + contentItems[0]);
    this.venue = venue;
  }

  onGetVenueDataFail(jqXhr) {
    onsole.log('onGetVenueDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onSaveVenueDataSuccess(data) {
    console.log('onSaveVenueDataSuccess');

  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateDescription(event) {
    this.description = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateUrl(event) {
    this.url = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateCeremonyTime(event) {
    this.ceremonyTime = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
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
