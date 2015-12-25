import React from 'react';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';
import LongDescription from '../../Widgets/LongDescription/LongDescription';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import Title from '../../Widgets/Title/Title';
import ShortDescription from '../../Widgets/ShortDescription/ShortDescription';
import Carousel from '../../Widgets/Carousel/Carousel';

class PhotoAlbumTemplateReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  closeModal() {
    //this.setState({ isModalOpen: false });
    $('#largeCarouselModal').modal('hide');
  }

  openModal(index) {
  //  this.setState({isModalOpen: true});
  //  this.setState({isModalOpen: true});
    //this.props.selectedPhoto = index || 1;
    $('#largeCarouselModal').modal('show');
  }

  render() {
    var propsData = {contentList: this.props.contentList, selectedPhoto: this.props.selectedPhoto};

    let nodes = this.props.contentList.map((photo, index) => {
      return (
        <div key={photo.sort_order} className="Photo">
            <img onClick={this.openModal.bind(this, index)} className="Content-small-image" src={photo.value}/>
        </div>
      );
    });

    if(_.isEmpty(this.props.contentList)){
      var emptyContentProps = {editLink: this.props.editLink}
      return (
        <EmptyContent {...emptyContentProps} />
      );
    }
    else {
      return (
        <div className='Content-panel'>
          <div className="Edit-Content-Button">
            <Link className="Navigation-link" to="/photo-album/edit">Edit</Link>
          </div>

          <div className="Photo-album-container">
            {nodes}
          </div>

          <div id="largeCarouselModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <Carousel {...propsData} />
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }


  }
}

export default PhotoAlbumTemplateReadOnly;
