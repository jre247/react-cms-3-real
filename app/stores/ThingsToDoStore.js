import alt from '../alt';
import TheProposalActions from '../actions/TheProposalActions';

class ThingsToDoStore {
  constructor() {
    this.bindActions(TheProposalActions);
    this.thingsToDo = [];
    this.ajaxAnimationClass = '';
  }

  onGetThingsToDoDataSuccess(data) {
    console.log('onGetThingsToDoDataSuccess');
    debugger;
    if(data && data.length > 0){
      this.thingsToDo = data;
    }
  }

  onGetThingsToDoDataFail(jqXhr) {
    onsole.log('onGetThingsToDoDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onSaveThingsToDoDataSuccess(history) {
    history.pushState(null, '/things-to-do');

  }

  onUpdateListItem(index, event) {
    debugger;
    this.thingsToDo[index].value = event.target.value;
    this.pthingsToDoValidationState = '';
    this.helpBlock = '';
  }


  onSaveThingsToDoDataFail(jqXhr) {
    onsole.log('onSaveThingsToDoDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(ThingsToDoStore);
