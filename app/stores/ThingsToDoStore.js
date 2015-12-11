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
      //var contentItems = data;
    //  var thingsToDoHash = {};
    //  var thingsToDo = [];

      // _.each(contentItems, function(item, index){
      //   var parentId = item.parentId;
      //
      //   if(parentId > 0){
      //     var thingToDoItem = thingsToDoHash[parentId];
      //     if (_.isEmpty(thingToDoItem){
      //       thingToDoItem = {};
      //       thingToDoItem.subListItems = [];
      //     }
      //
      //     var subListItem = item.value;
      //     thingToDoItem.subListItems.push(subListItem);
      //   }
      //   else{
      //     var thingToDoItem = thingsToDoHash[item.Id];
      //     if (_.isEmpty(thingToDoItem){
      //       thingToDoItem = {};
      //       thingToDoItem.parentItem = item.value;
      //     }
      //   }
      // });
      //
      // _.each(thingsToDoHash, function(item, index){
      //   thingsToDo.push(item);
      // });

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
