import alt from '../alt';
import {assign} from 'underscore';

class AppSettingActions {
  constructor() {
    this.generateActions(
      'updateAjaxAnimation',
      'getAppSettingsSuccess'
    );
  }

  getAppSettings() {
    $.ajax({
      url: '/api/app-settings'
    })
      .done((data) => {
        this.actions.getAppSettingsSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getAppSettingsFail(jqXhr);
      });
  }

}

export default alt.createActions(AppSettingActions);
