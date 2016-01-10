import {_} from 'underscore';

class API {
  constructor() {

  }

  static getAllUsers(history) {
    var promise = $.Deferred();

    $.ajax({
        type: 'GET',
        url: '/api/users'
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  static getUser(userId, history) {
    var promise = $.Deferred();

    $.ajax({
        type: 'GET',
        url: '/api/users/' + userId
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }
  //
  // static getLoggedInUser(history) {
  //   var promise = $.Deferred();
  //   debugger;
  //   $.ajax({
  //       type: 'GET',
  //       url: '/api/getLoggedInUser'
  //     })
  //       .done((data) => {
  //         promise.resolve(data);
  //       })
  //       .fail((jqXhr) => {
  //         promise.reject(this.onFail(jqXhr.responseJSON.message));
  //       });
  //
  //   return promise.promise();
  // }


  static saveUser(userViewmodel) {
    var promise = $.Deferred();

    $.ajax({
        type: 'POST',
        url: '/api/users/' + userViewmodel.id,
        data: {userViewmodel: userViewmodel}
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
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

  static getContentListForPage(pageId, isEdit) {
    var promise = $.Deferred();
    var baseUrl = '/api/pages/';
    if(isEdit){
      baseUrl = baseUrl + 'edit/';
    }

    $.ajax({
      url: baseUrl + pageId
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
