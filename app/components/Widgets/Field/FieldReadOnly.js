import {_} from 'underscore';
import React from 'react';
import LongDescription from '../../Widgets/LongDescription/LongDescription';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import Title from '../../Widgets/Title/Title';
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

    //todo: think about why there's code that declare another props data object to pass into list item sub or parent
    if(this.props.isListItem){
      var listItemProps = {listItem: this.props.contentItem, isEdit: this.props.isEdit};
      if(FieldHelper.isSubListItem(contentItem)){
        return (
          <div>
            <SubListItem {...listItemProps} />
          </div>
        );
      }
      else {
        return (
          <div>
            <ParentListItem {...listItemProps} />
          </div>
        );
      }
    }



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



  }
}

export default FieldReadOnly;
