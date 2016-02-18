import React from 'react';
import API from '../../../API';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import ImageFactory from '../../Widgets/Image/ImageFactory';
import ImageUploadFactory from '../../Widgets/Image/ImageUploadFactory';
import Sortable from '../../Widgets/Components/Sortable';
import WidgetService from '../../Widgets/WidgetService';
var self;

class PhotoAlbumTemplateEdit extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 2;
    this.state = {contentList: [], isMultiUpload: false};
    this.maxContentId;
    self = this;
  }
  componentDidMount() {
    this.getContentListForPage(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.getContentListForPage(nextProps);
  }

  setStateForContentList(newContentList){
    self.setState({contentList: newContentList || []});
  }

  getContentListForPage(propsData){
    WidgetService.getContentListForPage(propsData.pageId, propsData.isEdit).then(function(viewmodel){
      self.setState({contentList: viewmodel.contentList || []});

      var contentItemWithMaxId = _.max(viewmodel.contentList, function(contentItem){ return contentItem.id; });
      self.maxContentId = contentItemWithMaxId.id;
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    WidgetService.save(self.state.contentList, self.props.pageId).then(function(){
      self.props.history.pushState(null, '/' + self.props.readOnlyPageLink);
    });
  }

  onSettingsSave(contentItem, contentIndex){
    self.state.contentList[contentIndex] = contentItem;
    self.setStateForContentList(self.state.contentList);
  }

  createImage(event){
    var sortOrder = this.state.contentList.length + 1;

    var imageFactory = new ImageFactory(sortOrder, 'Our Story Image',
      'Our Story Image');
    var image = imageFactory.create();
    self.maxContentId++;
    image.id = self.maxContentId;
    image.sort_order = self.state.contentList.length;

    this.state.contentList.push(image);
    self.setState({contentList: this.state.contentList});
  }
  uploadImage(event){
    var sortOrder = this.state.contentList.length + 1;

    var imageUploadFactory = new ImageUploadFactory(sortOrder, 'Photo Album Image',
      'Photo Album Image');
    var image = imageUploadFactory.create();
    self.maxContentId++;
    image.id = self.maxContentId;
    image.sort_order = self.state.contentList.length;

    this.state.contentList.push(image);
    self.setState({contentList: this.state.contentList, isMultiUpload: true});
  }
  updateContent(index, event) {
    this.state.contentList[index].value = event.target.value;
    self.setState({contentList: this.state.contentList});
  }
  removeContent(index, event){
    this.state.contentList.splice(index, 1);
    self.setState({contentList: this.state.contentList});
  }
  setStateForContentList(newContentList){
    self.setState({contentList: newContentList})
  }
  render() {
    let nodes = this.state.contentList.map((contentItem, index) => {
      var propsData = {
        contentItem: contentItem,
        isEdit: true,
        imageSize: 'small',
        settings: contentItem.settings,
        contentIndex: index,
        contentList: this.state.contentList,
        onSettingsSave: this.onSettingsSave.bind(this),
        onChange:  this.updateContent.bind(this, index),
        onRemove: this.removeContent.bind(this, index),
        isMultiUpload: this.state.isMultiUpload,
        buildUploadImageInstance: this.uploadImage.bind(this),
        maxContentId: self.maxContentId,
        setStateForContentList: self.setStateForContentList.bind(this)
      };

        return (
          <div key={index} data-id={contentItem.id} className="Photo">
            <Field {...propsData} />
          </div>
        );
    });

    var sortableProps = _.extend({
      sortableItemElement: '.Photo',
      itemList: self.state.contentList,
      itemPropertyToSortBy: 'sort_order',
      setStateForItemList: self.setStateForContentList.bind(this),
      isSortingEnabled: true
    }, this.props);

    return (
      <div className='Content-panel Photo-album-template'>
        <div className="Content-container">
          <div className='row'>
            <div className='col-sm-3'>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.createImage.bind(this)}>
                  Add Image By Url
                </button>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.uploadImage.bind(this)}>
                  Upload Image
                </button>
              </div>
            </div>
          </div>

          <div className="Photo-album-container-edit">
            <Sortable {...sortableProps}>
              <div>
                {nodes}
              </div>
            </Sortable>
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
