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
import LongDescriptionFactory from '../../Widgets/LongDescription/LongDescriptionFactory';
import ImageFactory from '../../Widgets/Image/ImageFactory';
import TitleFactory from '../../Widgets/Title/TitleFactory';
import ShortDescriptionFactory from '../../Widgets/ShortDescription/ShortDescriptionFactory';
var self;

class PhotoAlbumTemplateEdit extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 2;
    this.state = {contentList: []};
    self = this;
  }
  componentDidMount() {
    API.getContentListForPage(this.props.pageId, this.props.isEdit).then(function(viewmodel){
      self.setStateForContentList(viewmodel.contentList);
    });
  }

  //need to get page in this method since componentDidMount does not get called when
  //changing routes to another page
  componentWillReceiveProps(nextProps){
    API.getContentListForPage(nextProps.pageId, nextProps.isEdit).then(function(viewmodel){
      self.setStateForContentList(viewmodel.contentList);
    });
  }

  componentWillUnmount() {

  }
  setStateForContentList(newContentList){
    self.setState({contentList: newContentList})
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    API.saveContentListForPage(self.state.contentList, self.props.pageId).then(function(){
      self.props.history.pushState(null, '/' + self.props.readOnlyPageLink)
    });
  }

  //todo: move to actions
  createImage(event){
    var sortOrder = this.state.contentList.length + 1;

    var imageFactory = new ImageFactory(sortOrder, 'Our Story Image',
      'Our Story Image');
    var image = imageFactory.create();

    this.state.contentList.push(image);
    this.setStateForContentList(this.state.contentList);
  }
  updateContent(index, event) {
    this.state.contentList[index].value = event.target.value;
    this.setStateForContentList(this.state.contentList);
    //this.setState({contentList: this.state.contentList});
  }
  removeContent(index, event){
    this.state.contentList.splice(index, 1);
    this.setStateForContentList(this.state.contentList);
  }
  render() {
    let nodes = this.state.contentList.map((contentItem, index) => {
      var propsData = {contentItem: contentItem, isEdit: true, imageSize: 'small',
        onChange:  this.updateContent.bind(this, index),
        onRemove: this.removeContent.bind(this, index)};

        if(FieldHelper.isImage(contentItem)){
          return (
            <div key={contentItem.sort_order} className="Photo">
              <Field {...propsData} />
            </div>
          );
        }
        else{
          throw 'content type should be image.';
        }
    });

    return (
      <div className='Content-panel Photo-album-template'>
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

          <div className="Photo-album-container-edit">
            {nodes}
          </div>

          <div className={this.state.contentList.length > 0 ? 'form-group' : 'form-group hidden'}>
            <button type='submit' onClick={this.submit} className='btn btn-primary'>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoAlbumTemplateEdit;
