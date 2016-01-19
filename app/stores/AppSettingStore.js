import alt from '../alt';
import AppSettingActions from '../actions/AppSettingActions';
import {_} from 'underscore';

class AppSettingStore {
  constructor() {
    this.bindActions(AppSettingActions);
    this.appSettings = [];
    this.appSettingsDictionary = {};
    this.ajaxAnimationClass = '';
  }
  getAppSettingsSuccess(appSettings){
    var appSettingsDictionary = {};

    _.each(appSettings, (setting) => {
      appSettingsDictionary[setting.name] = setting.value;
    });

    this.appSettings = appSettings;
    this.appSettingsDictionary = appSettingsDictionary;
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
