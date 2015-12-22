import React from 'react';
import {Link} from 'react-router';
import VenueStore from '../../stores/VenueStore';
import VenueActions from '../../actions/VenueActions';
import EmptyContent from '../EmptyContent';
import {_} from 'underscore';
import FieldHelper from '../Field/FieldHelper';
import ShortDescription from '../Widgets/ShortDescription/ShortDescription';
import ImageWidget from '../Widgets/Image/ImageWidget';
import Title from '../Widgets/Title/Title';

class Venue extends React.Component {
  constructor(props) {
    super(props);
    this.state = VenueStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    VenueStore.listen(this.onChange);
    VenueActions.getVenueData();
  }
  componentWillUnmount() {
    VenueStore.unlisten(this.onChange);
  }
  render() {
    if(_.isEmpty(this.state.contentList)){
      var emptyContentProps = {editLink: '/venue/edit'}
      return (
        <EmptyContent {...emptyContentProps} />
      );
    }
    else {
      let weddingNodes = this.state.contentList.map((contentItem, index) => {
          var propsData = {value: contentItem.value, isEdit: false};

          if(FieldHelper.isShortDescription(contentItem)){
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
          else {
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
              <Link className="Navigation-link" to="/venue/edit">Edit</Link>
            </div>

            {weddingNodes}
          </div>
        </div>
      );
    }

  }
}

export default Venue;
