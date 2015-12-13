import alt from '../alt';
import {assign} from 'underscore';
var pageId = 4;

class PhotoAlbumActions {
  constructor() {
    this.generateActions(
      'getPhotoAlbumDataSuccess',
      'getPhotoAlbumDataFail',
      'savePhotoAlbumDataSuccess',
      'savePhotoAlbumDataFail',
      'updateAjaxAnimation'
    );
  }

  getPhotoAlbumData() {
    console.log('getting page content for page: ' + pageId);
    $.ajax({
      url: '/api/pages/' + pageId
    })
      .done((data) => {
        console.log('getPhotoAlbumDataSuccess(data)');
        this.actions.getPhotoAlbumDataSuccess(data);
      })
      .fail(() => {
        this.actions.getPhotoAlbumDataFail();
      });
  }

  savePhotoAlbumData(contents, history) {
    $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: {contents: contents}
      })
        .done((data) => {
          this.actions.savePhotoAlbumDataSuccess(data.message, history);
        })
        .fail((jqXhr) => {
          this.actions.savePhotoAlbumDataFail(jqXhr.responseJSON.message);
        });
  }


}

export default alt.createActions(PhotoAlbumActions);
