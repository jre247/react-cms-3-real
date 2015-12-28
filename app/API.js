import {_} from 'underscore';

class API {
  constructor() {

  }

  static saveContentListForPage(contentList, pageId, history) {
    var promise = $.Deferred();

    $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: {contents: contentList}
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static getContentListForPage(pageId) {
    var promise = $.Deferred();

    $.ajax({
      url: '/api/pages/' + pageId
    })
      .done((data) => {
        promise.resolve(data);
      })
      .fail((jqXhr) => {
        promise.reject(this.onFail(jqXhr.responseJSON.message));
      });

    return promise.promise();
  }

  onFail(jqXhr) {
    onsole.log('onGetThingsToDoDataFail');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default API;
