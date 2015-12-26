import {_} from 'underscore';
import LongDescription from '../../Widgets/LongDescription/LongDescription';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import Title from '../../Widgets/Title/Title';
import ShortDescription from '../../Widgets/ShortDescription/ShortDescription';
import FieldHelper from '../../Widgets/Field/FieldHelper';

class FieldReadOnly {
  constructor() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(FieldHelper.isDescription(contentItem)){
      return (
        <div className="Content-item-container" key={contentItem.sort_order}>
          <LongDescription {...this.props} />
        </div>
      );
    }
    else if(FieldHelper.isShortDescription(contentItem)){
      return (
        <div className="Content-item-container" key={contentItem.sort_order}>
          <ShortDescription {...this.props} />
        </div>
      );
    }
    else if(FieldHelper.isImage(contentItem)){
      return (
        <div className="Content-item-container" key={contentItem.sort_order}>
          <ImageWidget {...this.props} />
        </div>
      );
    }
    else if(FieldHelper.isTitle(contentItem)){
      return (
        <div className="Content-item-container" key={contentItem.sort_order}>
          <Title {...this.props} />
        </div>
      );
    }
  }
}

export default FieldReadOnly;
