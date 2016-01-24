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

    API.saveContentListForPage(contentList, pageId)
      .done(function(){
        promise.resolve();
      })
      .fail(function(){
        promise.reject("Error save for widget.");
      });

    return promise.promise();
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

  static formatContentSettingsAsHash(contentSettings){
    var contentSettingsHash = {};
    _.each(contentSettings, (contentSetting) =>{
      contentSettingsHash[contentSetting.content_id] = contentSetting;
    });

    return contentSettingsHash;
  }
}

export default WidgetService;
