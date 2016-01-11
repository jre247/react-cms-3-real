import React from 'react';
import API from '../../../API';
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
import EditLink from '../../EditLink';
var self;

class PhotoAlbumTemplateReadOnly extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 2;
    this.state = {contentList: [], selectedPhoto: 1};
    self = this;
  }
  componentDidMount() {
    API.getContentListForPage(this.props.pageId, this.props.isEdit).then(function(viewmodel){
      self.setStateForContentList(viewmodel.contentList);
    });
  }
  setStateForContentList(newContentList){
    self.setState({contentList: newContentList})
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
    var propsData = _.extend({selectedPhoto: this.state.selectedPhoto, contentList: this.state.contentList,
      imageSize: 'small'}, this.props);

    let nodes = this.state.contentList.map((contentItem, index) => {
      var fieldPropsData = _.extend({contentItem: contentItem}, propsData);
      return (
        <div key={contentItem.sort_order} className="Photo" onClick={this.openModal.bind(this, index)}>
          <Field {...fieldPropsData} />
        </div>
      );
    });

    if(_.isEmpty(this.state.contentList)){
      return (
        <EmptyContent {...propsData} />
      );
    }
    else {
      return (
        <div className='Content-panel'>
          <EditLink {...this.props} />

          <div className="Photo-album-container-read-only">
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
