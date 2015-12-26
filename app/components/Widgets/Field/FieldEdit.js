import {_} from 'underscore';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import Title from '../../Widgets/Title/Title';
import ShortDescription from '../../Widgets/ShortDescription/ShortDescription';

class FieldEdit {
  constructor() {

  }

  render() {
    if(FieldHelper.isDescription(contentItem)){
      return (
        <div key={contentItem.sort_order} className="form-group">
          <LongDescription {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isShortDescription(contentItem)){
      return (
        <div key={contentItem.sort_order} className="form-group">
          <ShortDescription {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isImage(contentItem)){
      return (
        <div key={contentItem.sort_order} className="form-group">
          <ImageWidget {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isTitle(contentItem)){
      return (
        <div key={contentItem.sort_order} className="form-group">
          <Title {...propsData} />
        </div>
      );
    }
  }
}

export default FieldEdit;
