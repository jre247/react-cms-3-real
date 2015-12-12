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

  onHandleAddListItem(){
    debugger;
    var parentSortOrder = this.state.thingsToDo.length + 1;
    var childSortOrder = parentSortOrder + 1;

    var contents = [
      {
        name: 'Things To Do Parent List Item',
        description: 'Things To Do Parent List Item',
        value: '',
        contentType: 2,
        sortOrder: parentSortOrder
      },
      {
        name: 'Things To Do Child List Item',
        description: 'Things To Do Child List Item',
        value: '',
        contentType: 1,
        parentIndex: parentSortOrder,
        sortOrder: childSortOrder
      }
    ];

    this.state.thingsToDo.concat(contents);
  }

  onSaveThingsToDoDataSuccess(history) {
    history.pushState(null, '/things-to-do');

  }

  onUpdateListItem(index, event) {
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
