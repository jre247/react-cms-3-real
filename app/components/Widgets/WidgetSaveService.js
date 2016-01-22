import {_} from 'underscore';
import WidgetFactory from './WidgetFactory';
import API from '../../API';

class WidgetSaveService {
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
}

export default WidgetSaveService;
