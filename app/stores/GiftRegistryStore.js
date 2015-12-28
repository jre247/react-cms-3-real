import alt from '../alt';
import GiftRegistryActions from '../actions/GiftRegistryActions';

class GiftRegistryStore {
  constructor() {
    this.bindActions(GiftRegistryActions);
    this.contentList = [];
    this.ajaxAnimationClass = '';
  }

  onGetContentListDataSuccess(data) {
    console.log('onGetContentDataSuccess');
    if(data && data.length > 0){
      this.contentList = data;
    }
  }

  onGetContenteListDataFail(jqXhr) {
    onsole.log('onGetContentDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onSaveContentListDataSuccess(history) {
    history.pushState(null, '/gift-registry');
  }

  onSaveContentListDataFail(jqXhr) {
    onsole.log('onSaveContentDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(GiftRegistryStore);
