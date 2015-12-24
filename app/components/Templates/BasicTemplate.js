import React from 'react';
import {Link} from 'react-router';
import Field from '../Widgets/Field/Field';
import FieldHelper from '../Widgets/Field/FieldHelper';
import EmptyContent from '../EmptyContent';
import {_} from 'underscore';
import LongDescription from '../Widgets/LongDescription/LongDescription';
import ImageWidget from '../Widgets/Image/ImageWidget';

class BasicTemplate extends React.Component {
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
          if(FieldHelper.isDescription(contentItem)){
            var longDescriptionProps = {value: contentItem.value, isEdit: false};
            return (
              <div className="Content-item-container" key={contentItem.sort_order}>
                <LongDescription {...longDescriptionProps} />
              </div>
            );
          }
          else{
            var imageProps = {value: contentItem.value, isEdit: false};
            return (
              <div className="Content-item-container" key={contentItem.sort_order}>
                <ImageWidget {...imageProps} />
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

export default BasicTemplate;
