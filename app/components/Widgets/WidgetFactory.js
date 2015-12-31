import {_} from 'underscore';
import FieldHelper from './Field/FieldHelper';
import LongDescriptionFactory from './LongDescription/LongDescriptionFactory';
import IframeFactory from './Iframe/IframeFactory';
import ImageFactory from './Image/ImageFactory';
import TitleFactory from './Title/TitleFactory';
import ShortDescriptionFactory from './ShortDescription/ShortDescriptionFactory';
import UrlFactory from './Url/UrlFactory';

class WidgetFactory {
  constructor(widgetName, sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    this.widgetName = widgetName;
    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number;
    this.column_number = column_number;
  }
  create() {
    if(this.widgetName === 'longDescription'){
      var factory = new LongDescriptionFactory(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex,
        this.row_number, this.column_number);
      var factoryInstance = factory.create();

      return factoryInstance;
    }
    else if(this.widgetName === 'shortDescription'){
      var factory = new ShortDescriptionFactory(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex,
        this.row_number, this.column_number);
      var factoryInstance = factory.create();

      return factoryInstance;
    }
    else if(this.widgetName === 'image'){
      var factory = new ImageFactory(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex,
        this.row_number, this.column_number);
      var factoryInstance = factory.create();

      return factoryInstance;
    }
    else if(this.widgetName === 'title'){
      var factory = new TitleFactory(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex,
        this.row_number, this.column_number);
      var factoryInstance = factory.create();

      return factoryInstance;
    }
    else if(this.widgetName === 'link'){
      var factory = new UrlFactory(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex,
        this.row_number, this.column_number);
      var factoryInstance = factory.create();

      return factoryInstance;
    }
    else if(this.widgetName === 'iframe'){
      var factory = new IframeFactory(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex,
        this.row_number, this.column_number);
      var factoryInstance = factory.create();

      return factoryInstance;
    }
    else{
      throw "There is no Widget that matches the this.widgetName.";
    }

  }
}

export default WidgetFactory;
