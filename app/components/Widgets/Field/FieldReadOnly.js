import {_} from 'underscore';
import React from 'react';
import LongDescription from '../../Widgets/LongDescription/LongDescription';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import Title from '../../Widgets/Title/Title';
import Url from '../../Widgets/Url/Url';
import ShortDescription from '../../Widgets/ShortDescription/ShortDescription';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import SubListItem from '../../Widgets/ListItem/SubListItem';
import ParentListItem from '../../Widgets/ListItem/ParentListItem';

class FieldReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    var contentItem = this.props.contentItem;
    var propsData = _.extend({value: contentItem.value}, this.props);

    if(FieldHelper.isDescription(contentItem)){
      return (
        <div className="Content-item-container" key={contentItem.sort_order}>
          <LongDescription {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isShortDescription(contentItem)){
      return (
        <div className="Content-item-container" key={contentItem.sort_order}>
          <ShortDescription {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isImage(contentItem)){
      return (
        <div className="Content-item-container" key={contentItem.sort_order}>
          <ImageWidget {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isTitle(contentItem)){
      return (
        <div className="Content-item-container" key={contentItem.sort_order}>
          <Title {...propsData} />
        </div>
      );
    }
    else if(FieldHelper.isUrl(contentItem)){
      return (
        <div className="Content-item-container" key={contentItem.sort_order}>
          <Url {...propsData} />
        </div>
      );
    }



  }
}

export default FieldReadOnly;
