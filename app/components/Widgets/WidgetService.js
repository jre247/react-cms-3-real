import {_} from 'underscore';
import WidgetFactory from './WidgetFactory';
import API from '../../API';

class WidgetService {
  static save(contentList, pageId) {
    var promise = $.Deferred();

    var contentListProcessed = [];

    _.each(contentList, (contentItem) => {
      var widgetFactory = new WidgetFactory();
      var widget = widgetFactory.getWidget(contentItem);

      var contentItemProcessed = widget.onSave(contentItem);
      contentListProcessed.push(contentItemProcessed);
    });

    var self = this;
    _.each(contentList, function(contentItem){
      var settingsFormatted = self.packageContentSettingsForSave(contentItem);
      contentItem.settings = settingsFormatted;
    });

    API.saveContentListForPage(contentList, pageId)
      .done(function(){
        promise.resolve();
      })
      .fail(function(){
        promise.reject("Error save for widget.");
      });

    return promise.promise();
  }

  static packageContentSettingsForSave(contentItem){
    var settingsHash = contentItem.settings;
    var contentId = contentItem.id;
    var settingsArray = [];

    for(var settingKey in settingsHash){
      var settingValue = settingsHash[settingKey].setting_value;
      settingsArray.push({setting_id: settingKey, content_id: contentId, setting_value: settingValue});
    };

    return settingsArray;
  }

  static getContentListForPage(pageId, isEdit){
    var promise = $.Deferred();
    var self = this;

    API.getContentListForPage(pageId, isEdit)
      .done(function(viewmodel){
        _.each(viewmodel.contentList, function(contentItem){
          var settings = _.where(viewmodel.contentSettings, {content_id: contentItem.id});
          var settingsHash = self.formatContentSettingsAsHash(settings);
          contentItem.settings = settings;
        });

        promise.resolve(viewmodel.contentList || []);
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
    var contentSettingsHash = {};
    _.each(contentSettings, (contentSetting) =>{
      var contentId = contentSetting.content_id;
      var settingId = contentSetting.setting_id;
      var settingValue = contentSetting.setting_value;

      var setting = {content_id: contentId, setting_id: settingId, setting_value: settingValue};

      if(!contentSettingsHash){
        contentSettingsHash = {};
      }

      contentSettingsHash[settingId] = setting;
    });

    return contentSettingsHash;
  }
}

export default WidgetService;
