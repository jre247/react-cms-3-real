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
import TemplateHelper from '../../../helpers/TemplateHelper';

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
    var parentIndex = index;
    var longDescriptionFactory = new LongDescriptionFactory(null, 'List Long Description Sublist Item',
      'List Long Description Sublist Item', this.templateId, parentIndex);
    var longDescription = longDescriptionFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, longDescription);
    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentList();
    //this.setState({contentList: this.props.contentList});
  }
  createShortDescription(index, event){
    var parentIndex = index;
    var shortDescriptionFactory = new ShortDescriptionFactory(null, 'List Description Sublist Item',
      'List Description Sublist Item', this.templateId, parentIndex);
    var shortDescription = shortDescriptionFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, shortDescription);
    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.state.contentList});
  }
  createTitle(index, event){
    var parentIndex = index;
    var factory = new TitleFactory(null, 'List Title Sublist Item',
      'List Title Sublist Item', this.templateId, parentIndex);
    var title = factory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, title);
    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentList();
    //this.setState({contentList: this.state.contentList});
  }
  //todo: move to actions
  createImage(index, event){
    var parentIndex = index;
    var imageFactory = new ImageFactory(null, 'List Image Sublist Item',
      'List Image Sublist Item', this.templateId, parentIndex);
    var image = imageFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, image);
    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.props.contentList});
  }
  createUrl(index, event){
    var parentIndex = index;
    var urlFactory = new UrlFactory(null, 'List Url Sublist Item',
      'List Url Sublist Item', this.templateId, parentIndex);
    var url = urlFactory.create();

    this.props.contentList.splice(this.getIndexForNewChild(index), 0, url);
    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.props.contentList});
  }
  getIndexForNewChild(parentIndex){
    var lastChildIndexForParent = this.findLastChildIndexForParent(parentIndex);
    return lastChildIndexForParent + 1;
  }
  findLastChildIndexForParent(parentIndex){
    var lastChildIndex = parentIndex;
    for(var i = parentIndex + 1; i < this.props.contentList.length; i++){
      var listItemCompare = this.props.contentList[i];
      if(FieldHelper.isParentListItem(listItemCompare)){
        break;
      }
      if(listItemCompare.parent_index === parentIndex){
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
