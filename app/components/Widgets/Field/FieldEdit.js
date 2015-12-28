import {_} from 'underscore';
import React from 'react';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import Title from '../../Widgets/Title/Title';
import Url from '../../Widgets/Url/Url';
import ShortDescription from '../../Widgets/ShortDescription/ShortDescription';
import LongDescription from '../../Widgets/LongDescription/LongDescription';
import Iframe from '../../Widgets/Iframe/Iframe';

class FieldEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var contentItem = this.props.contentItem;
    var propsData = _.extend({value: contentItem.value}, this.props);

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
    else if(FieldHelper.isUrl(contentItem)){
      return (
        <div key={contentItem.sort_order} className="form-group">
          <Url {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isIframe(contentItem)){
      return (
        <div key={contentItem.sort_order} className="form-group">
          <Iframe {...propsData} />
        </div>
      );
    }
    else{
      throw "There is no Field that matches the content item.";
    }
  }
}

export default FieldEdit;
