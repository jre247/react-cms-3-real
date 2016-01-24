import {_} from 'underscore';
import WidgetFactory from './WidgetFactory';
import API from '../../API';

class WidgetService {
  static save(contentList, contentSettingsHash, pageId) {
    var promise = $.Deferred();

    var contentListProcessed = [];

    _.each(contentList, (contentItem) => {
      var widgetFactory = new WidgetFactory();
      var widget = widgetFactory.getWidget(contentItem);

      var contentItemProcessed = widget.onSave(contentItem);
      contentListProcessed.push(contentItemProcessed);
    });

    debugger;

    var contentSettings = this.packageContentSettingsForSave(contentSettingsHash);

    API.saveContentListForPage(contentList, contentSettings, pageId)
      .done(function(){
        promise.resolve();
      })
      .fail(function(){
        promise.reject("Error save for widget.");
      });

    return promise.promise();
  }

  static packageContentSettingsForSave(contentSettingsHash){
    var contentSettings = [];
    for(var contentKey in contentSettingsHash){
      var contentId = contentKey;
      var settingsHash = contentSettingsHash[contentKey];

      for(var settingKey in settingsHash){
        var settingValue = settingsHash[settingKey];
        contentSettings.push({setting_id: settingKey, content_id: contentId, setting_value: settingValue});
      };
    };

    return contentSettings;
  }

  static getContentListForPage(pageId, isEdit){
    var promise = $.Deferred();
    var self = this;

    API.getContentListForPage(pageId, isEdit)
      .done(function(viewmodel){
        var contentSettingsHash = self.formatContentSettingsAsHash(viewmodel.contentSettings);

        var viewmodelFormatted = {contentSettings: contentSettingsHash, contentList: viewmodel.contentList};

        promise.resolve(viewmodelFormatted);
      })
      .fail(function(){
        promise.reject("Error retrieving content list for widget.");
      });

    return promise.promise();
  }

  // build a hash where the key is the content id and the value is
  // another hash where that inner hash's key is the setting id and t
  // he value is the setting
  static formatContentSettingsAsHash(contentSettings){
    var contentsSettingsHash = {};
    _.each(contentsSettingsHash, (contentSettings) =>{
      var settingsHash = {};
      _.each(contentSettings, (setting) =>{
        settingsHash[setting.id] = setting;
      });

      contentsSettingsHash[contentSetting.content_id] = settingsHash;
    });

    return contentsSettingsHash;
  }
}

export default WidgetService;
