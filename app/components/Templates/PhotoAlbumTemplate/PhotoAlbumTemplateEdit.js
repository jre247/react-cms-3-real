import React from 'react';
import API from '../../../API';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';
import ImageWidget from '../../Widgets/Image/ImageWidget';
import ImageFactory from '../../Widgets/Image/ImageFactory';
import Sortable from '../../Widgets/Components/Sortable';
var self;

class PhotoAlbumTemplateEdit extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 2;
    this.state = {contentList: []};
    this.maxContentId;
    self = this;
  }
  componentDidMount() {
    this.getContentListForPage(this.props);
  }

  //need to get page in this method since componentDidMount does not get called when
  //changing routes to another page
  componentWillReceiveProps(nextProps){
    this.getContentListForPage(nextProps);
  }

  getContentListForPage(propsData){
    API.getContentListForPage(propsData.pageId, propsData.isEdit).then(function(viewmodel){
      self.setState({contentList: viewmodel.contentList});
      var contentItemWithMaxId = _.max(viewmodel.contentList, function(contentItem){ return contentItem.id; });
      self.maxContentId = contentItemWithMaxId.id;
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    API.saveContentListForPage(self.state.contentList, self.props.pageId).then(function(){
      self.props.history.pushState(null, '/' + self.props.readOnlyPageLink)
    });
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
      var propsData = {contentItem: contentItem, isEdit: true, imageSize: 'small',
        onChange:  this.updateContent.bind(this, index),
        onRemove: this.removeContent.bind(this, index)};

        if(FieldHelper.isImage(contentItem)){
          return (
            <div key={contentItem.sort_order} data-id={contentItem.id} className="Photo">
              <Field {...propsData} />
            </div>
          );
        }
        else{
          throw 'content type should be image.';
        }
    });

    var sortableProps = _.extend({sortableItemElement: '.Photo', itemList: self.state.contentList,
      itemPropertyToSortBy: 'sort_order', setStateForItemList: self.setStateForContentList.bind(this)},
      this.props);

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
