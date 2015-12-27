import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import LongDescriptionFactory from '../../Widgets/LongDescription/LongDescriptionFactory';
import ImageFactory from '../../Widgets/Image/ImageFactory';
import TitleFactory from '../../Widgets/Title/TitleFactory';
import ShortDescriptionFactory from '../../Widgets/ShortDescription/ShortDescriptionFactory';
import UrlFactory from '../../Widgets/Url/UrlFactory';

class ParentListItemEdit extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = this.props.templateId;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  findParentIndex(currentSortOrder){
    var parentIndex = 0;
    var currentIndex = currentSortOrder - 1;

    for(var index = currentIndex - 1; index > 0; index--){
      var listItem = this.props.contentList[index];
      if(!listItem.parent_index && listItem.parent_index !== 0){
        parentIndex = listItem.sort_order;
        break;
      }
    }

    return parentIndex;
  }

  createLongDescription(index, event){
    var sortOrder = this.getSortOrderForNewChild(index);
    var parentIndex = this.findParentIndex(sortOrder);
    var longDescriptionFactory = new LongDescriptionFactory(sortOrder, 'List Long Description Sublist Item',
      'List Long Description Sublist Item', this.templateId, parentIndex);
    var longDescription = longDescriptionFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, longDescription);
    this.props.setStateForContentList();
    //this.setState({contentList: this.props.contentList});
  }
  createShortDescription(index, event){
    var sortOrder = this.getSortOrderForNewChild(index);
    var parentIndex = this.findParentIndex(sortOrder);
    var shortDescriptionFactory = new ShortDescriptionFactory(sortOrder, 'List Description Sublist Item',
      'List Description Sublist Item', this.templateId, parentIndex);
    var shortDescription = shortDescriptionFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, shortDescription);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.state.contentList});
  }
  createTitle(index, event){
    var sortOrder = this.getSortOrderForNewChild(index);
    var parentIndex = this.findParentIndex(sortOrder);
    var factory = new TitleFactory(sortOrder, 'List Title Sublist Item',
      'List Title Sublist Item', this.templateId, parentIndex);
    var title = factory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, title);
    this.props.setStateForContentList();
    //this.setState({contentList: this.state.contentList});
  }
  //todo: move to actions
  createImage(index, event){
    var sortOrder = this.getSortOrderForNewChild(index);
    var parentIndex = this.findParentIndex(sortOrder);
    var imageFactory = new ImageFactory(sortOrder, 'List Image Sublist Item',
      'List Image Sublist Item', this.templateId, parentIndex);
    var image = imageFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, image);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.props.contentList});
  }
  createUrl(index, event){
    var sortOrder = this.getSortOrderForNewChild(index);
    var parentIndex = this.findParentIndex(sortOrder);
    var urlFactory = new UrlFactory(sortOrder, 'List Url Sublist Item',
      'List Url Sublist Item', this.templateId, parentIndex);
    var url = urlFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, url);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.props.contentList});
  }
  getIndexForNewChild(parentIndex){
    debugger;
    var lastChildIndexForParent = this.findLastChildForParent(parentIndex);
    return lastChildIndexForParent;
  }
  getSortOrderForNewChild(parentIndex){
    debugger;
    var lastChildIndexForParent = this.findLastChildForParent(parentIndex);
    return lastChildIndexForParent + 1;
  }
  findLastChildForParent(parentIndex){
    debugger;
    var lastChildIndex = parentIndex + 1;
    for(var i = parentIndex + 1; i < this.props.contentList.length; i++){
      var listItemCompare = this.props.contentList[i];
      if(!listItemCompare.parent_index){
        break;
      }
      if(listItemCompare.parent_index == parentIndex){
        lastChildIndex = i;
      }
    };

    return lastChildIndex;
  }

  render() {
    var propsData = _.extend({value: this.props.contentItem.value }, this.props);

    return (
      <div key={this.props.contentItem.sort_order} className='container List-item-group'>
        <div className='row'>
          <div className='col-sm-2'>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.createLongDescription.bind(this, this.props.index)}>
                Create Long Description
              </button>
            </div>
          </div>
          <div className='col-sm-2'>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.createImage.bind(this, this.props.index)}>
                Create Image
              </button>
            </div>
          </div>
          <div className='col-sm-2'>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.createTitle.bind(this, this.props.index)}>
                Create Title
              </button>
            </div>
          </div>
          <div className='col-sm-2'>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.createUrl.bind(this, this.props.index)}>
                Create Url
              </button>
            </div>
          </div>
          <div className='col-sm-2'>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.createShortDescription.bind(this, this.props.index)}>
                Create Short Description
              </button>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-8'>
            <div className="form-group">
              <Field {...propsData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParentListItemEdit;
