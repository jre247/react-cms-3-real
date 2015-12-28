import alt from '../alt';
import PhotoAlbumActions from '../actions/PhotoAlbumActions';

class PhotoAlbumStore {
  constructor() {
    this.bindActions(PhotoAlbumActions);
    this.contentList = [];
    this.isModalOpen = false;
    this.selectedPhoto = 1;
    this.ajaxAnimationClass = '';
  }

  onGetPhotoAlbumDataSuccess(data) {
    console.log('onGetPhotoAlbumDataSuccess');
    if(data && data.length > 0){
      this.contentList = data;
    }
  }

  onGetPhotoAlbumDataFail(jqXhr) {
    onsole.log('onGetPhotoAlbumDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onSavePhotoAlbumDataSuccess(history) {
    history.pushState(null, '/photo-album');

  }

  onSavePhotoAlbumDataFail(jqXhr) {
    onsole.log('onSavePhotoAlbumDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(PhotoAlbumStore);
