import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
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

  createLongDescription(index, event){
    var sortOrder = this.getSortOrderForNewChild(index);
    var parentIndex = index;
    var longDescriptionFactory = new LongDescriptionFactory(sortOrder, 'List Long Description Sublist Item',
      'List Long Description Sublist Item', this.templateId, parentIndex);
    var longDescription = longDescriptionFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, longDescription);
    this.props.setStateForContentList();
    //this.setState({contentList: this.props.contentList});
  }
  createShortDescription(index, event){
    var sortOrder = this.getSortOrderForNewChild(index);
    var parentIndex = index;
    var shortDescriptionFactory = new ShortDescriptionFactory(sortOrder, 'List Description Sublist Item',
      'List Description Sublist Item', this.templateId, parentIndex);
    var shortDescription = shortDescriptionFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, shortDescription);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.state.contentList});
  }
  createTitle(index, event){
    var sortOrder = this.getSortOrderForNewChild(index);
    var parentIndex = index;
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
    var parentIndex = index;
    var imageFactory = new ImageFactory(sortOrder, 'List Image Sublist Item',
      'List Image Sublist Item', this.templateId, parentIndex);
    var image = imageFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, image);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.props.contentList});
  }
  createUrl(index, event){
    var sortOrder = this.getSortOrderForNewChild(index);
    var parentIndex = index;
    var urlFactory = new UrlFactory(sortOrder, 'List Url Sublist Item',
      'List Url Sublist Item', this.templateId, parentIndex);
    var url = urlFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, url);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.props.contentList});
  }
  getIndexForNewChild(parentIndex){
    var lastChildIndexForParent = this.findLastChildIndexForParent(parentIndex);
    return lastChildIndexForParent + 1;
  }
  getSortOrderForNewChild(parentIndex){
    var lastChildSortOrderForParent = this.findLastChildSortOrderForParent(parentIndex);
    debugger;
    return lastChildSortOrderForParent + 1;
  }
  findLastChildIndexForParent(parentIndex){
    var lastChildIndex = parentIndex + 1;
    for(var i = parentIndex + 1; i < this.props.contentList.length; i++){
      var listItemCompare = this.props.contentList[i];
      if(FieldHelper.isParentListItem(listItemCompare)){
        break;
      }
      if(listItemCompare.parent_index == parentIndex){
        lastChildIndex = i;
      }
    };

    return lastChildIndex;
  }
  findLastChildSortOrderForParent(parentIndex){
    var parentSortOrder = this.props.contentList[parentIndex].sort_order;
    var lastChildSortOrder = parentSortOrder + 1;

    for(var i = parentIndex + 1; i < this.props.contentList.length; i++){
      var listItemCompare = this.props.contentList[i];
      if(FieldHelper.isParentListItem(listItemCompare)){
        break;
      }
      if(listItemCompare.parent_index == parentIndex){
        lastChildSortOrder = listItemCompare.sort_order;
      }
    };

    return lastChildSortOrder;
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
