import alt from '../alt';
import VenueActions from '../actions/VenueActions';

class VenueStore {
  constructor() {
    this.bindActions(VenueActions);
    this.venue = {};
    this.ajaxAnimationClass = '';
  }

  onGetVenueDataSuccess(data) {
    console.log('onGetVenueDataSuccess');
    var contentItems = data;
    var venue = {
      name: contentItems[0].value,
      eventDate: contentItems[1].value,
      url: contentItems[2].value,
      ceremonyTime: contentItems[3].value,
      cocktailHourTime: contentItems[4].value,
      receptionTime: contentItems[5].value,
      afterPartyTime: contentItems[6].value,
    }
    this.venue = venue;
  }

  onGetVenueDataFail(jqXhr) {
    onsole.log('onGetVenueDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onSaveVenueDataSuccess(history) {
    history.pushState(null, '/venue');

  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateEventDate(event) {
    this.eventDate = event.target.value;
    this.eventDateValidationState = '';
    this.helpBlock = '';
  }

  onUpdateUrl(event) {
    this.url = event.target.value;
    this.urlValidationState = '';
    this.helpBlock = '';
  }

  onUpdateCeremonyTime(event) {
    this.ceremonyTime = event.target.value;
    this.ceremonyTimeValidationState = '';
    this.helpBlock = '';
  }

  onUpdateCocktailHourTime(event) {
    this.cocktailHourTime = event.target.value;
    this.cocktailHourTimeValidationState = '';
    this.helpBlock = '';
  }

  onUpdateReceptionTime(event) {
    this.receptionTime = event.target.value;
    this.receptionTimeValidationState = '';
    this.helpBlock = '';
  }

  onUpdateAfterPartyTime(event) {
    this.afterPartyTime = event.target.value;
    this.afterPartyValidationState = '';
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
