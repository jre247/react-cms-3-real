import alt from '../alt';
import AppSettingActions from '../actions/AppSettingActions';
import {_} from 'underscore';

class AppSettingStore {
  constructor() {
    this.bindActions(AppSettingActions);
    this.appSettings = [];
    this.ajaxAnimationClass = '';
  }
  getAppSettingsSuccess(appSettings){
    debugger;
    var appSettingsDictionary = {};

    _.each(appSettings, (setting) => {
      appSettingsDictionary[setting.name] = setting.value;
    });

    this.appSettings = appSettingsDictionary;
  }

  getAppSettingsFail(jqXhr){
    onsole.log('getAppSettingsFail');
    toastr.error(jqXhr.responseJSON.message);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }
}

export default alt.createStore(AppSettingStore);
