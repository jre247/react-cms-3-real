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
import LongDescriptionFactory from '../../Widgets/LongDescription/LongDescriptionFactory';
import ImageFactory from '../../Widgets/Image/ImageFactory';
import TitleFactory from '../../Widgets/Title/TitleFactory';
import ShortDescriptionFactory from '../../Widgets/ShortDescription/ShortDescriptionFactory';

class PhotoAlbumTemplateEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }
  //todo: move to actions
  createImage(event){
    var sortOrder = this.props.contentList.length + 1;

    var imageFactory = new ImageFactory(sortOrder, 'Our Story Image',
      'Our Story Image');
    var image = imageFactory.create();
    image.template_id = 1;

    this.props.contentList.push(image);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.props.contentList});
  }
  updateContent(index, event) {
    this.props.contentList[index].value = event.target.value;
    this.props.setStateForContentList();
    //this.setState({contentList: this.state.contentList});
  }
  removeContent(index, event){
    this.props.contentList.splice(index, 1);
    this.props.setStateForContentList();
    //this.setState({contentList: this.state.contentList});
  }
  render() {
    let nodes = this.props.contentList.map((contentItem, index) => {
      var propsData = {value: contentItem.value, isEdit: true,
        onChange:  this.updateContent.bind(this, index),
        onRemove: this.removeContent.bind(this, index)};

        if(FieldHelper.isImage(contentItem)){
          return (
            <div key={contentItem.sort_order} className="form-group">
              <ImageWidget {...propsData} />
            </div>
          );
        }
        else{
          throw 'content type should be image.';
        }
    });

    return (
      <div className='Content-panel'>
        <div className="Content-container">
          <div className='row'>
            <div className='col-sm-3'>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.createImage.bind(this)}>
                  Create Image
                </button>
              </div>
            </div>
          </div>

          {nodes}

          <div className={this.props.contentList.length > 0 ? 'form-group' : 'form-group hidden'}>
            <button type='submit' onClick={this.props.submit} className='btn btn-primary'>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoAlbumTemplateEdit;
