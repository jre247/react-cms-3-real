import {_} from 'underscore';
import LongDescription from './LongDescription/LongDescription';
import Iframe from './Iframe/Iframe';
import ImageWidget from './Image/ImageWidget';
import ImageUpload from './Image/ImageUpload';
import Title from './Title/Title';
import ShortDescription from './ShortDescription/ShortDescription';
import Url from './Url/Url';

class WidgetFactory {
  getWidget(contentItem) {
    if(contentItem.content_type_id === 1){
      return ImageWidget;
    }
    else if(contentItem.content_type_id === 2){
      return LongDescription;
    }
    else if(contentItem.content_type_id === 3){
      return Title;
    }
    else if(contentItem.content_type_id === 4){
      return ShortDescription;
    }
    else if(contentItem.content_type_id === 5){
      return Url;
    }
    else if(contentItem.content_type_id === 6){
      return Iframe;
    }
    else if(contentItem.content_type_id === 7){
      return ImageUpload;
    }
    else{
      throw "There is no Widget that matches for content_type_id.";
    }

  }
}

export default WidgetFactory;
