import alt from '../alt';
import PageActions from '../actions/PageActions';

class PageStore {
  constructor() {
    this.bindActions(PageActions);
    this.pages = [];
    this.ajaxAnimationClass = '';
  }
  getAllPagesSuccess(viewmodel){
    this.pages = viewmodel.pages;
  }

  getAllPagesFail(jqXhr){
    onsole.log('onGetAllPagesFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(PageStore);
