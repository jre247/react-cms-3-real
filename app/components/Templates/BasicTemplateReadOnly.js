import React from 'react';
import {Link} from 'react-router';
import Field from '../Widgets/Field/Field';
import FieldHelper from '../Widgets/Field/FieldHelper';
import EmptyContent from '../EmptyContent';
import {_} from 'underscore';
import LongDescription from '../Widgets/LongDescription/LongDescription';
import ImageWidget from '../Widgets/Image/ImageWidget';
import Title from '../Widgets/Title/Title';
import ShortDescription from '../Widgets/ShortDescription/ShortDescription';

class BasicTemplateReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(_.isEmpty(this.props.contentList)){
      var emptyContentProps = {editLink: this.props.editLink}
      return (
        <EmptyContent {...emptyContentProps} />
      );
    }
    else {
      let nodes = this.props.contentList.map((contentItem, index) => {
          var propsData = {value: contentItem.value, isEdit: this.props.isEdit};
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
      });

      return (
        <div className='Content-panel'>
          <div className="Content-container Content-centered-container">
            <div className="Edit-Content-Button">
              <Link className="Navigation-link" to={this.props.editLink}>Edit</Link>
            </div>

            {nodes}
          </div>
        </div>
      );
    }
  }
}

export default BasicTemplateReadOnly;
