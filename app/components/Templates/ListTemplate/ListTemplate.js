import React from 'react';
import {Link} from 'react-router';
import EmptyContent from '../../EmptyContent';
import SubListItem from '../../Widgets/ListItem/SubListItem';
import ParentListItem from '../../Widgets/ListItem/ParentListItem';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../TemplateHelper';
import {_} from 'underscore';
import TitleFactory from '../../Widgets/Title/TitleFactory';
import EditLink from '../../EditLink';
import API from '../../../API';
var self;

class ListTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 3;
    this.state = {contentList: []};
    self = this;
  }

  componentDidMount() {
    API.getContentListForPage(this.props.pageId, this.props.isEdit).then(function(viewmodel){
      self.setStateForContentList(viewmodel.contentList);
    });
  }

  componentWillUnmount() {

  }

  setStateForContentList(newContentList){
    debugger;
    self.setState({contentList: newContentList})
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    API.saveContentListForPage(self.state.contentList, self.props.pageId).then(function(){
      self.props.history.pushState(null, self.props.readOnlyPageLink)
    });
  }

  updateContent(index, event) {
    this.state.contentList[index].value = event.target.value;
    this.setStateForContentList(this.state.contentList);
  }

  removeContent(index, event){
    this.state.contentList.splice(index, 1);
    TemplateHelper.setNewSortOrderForAllListItems(this.state.contentList);
    this.setStateForContentList(this.state.contentList);
  }

  addParentListItem(){
    var sortOrder = this.state.contentList.length + 1;
    var factory = new TitleFactory(sortOrder, 'List Parent Item',
      'List Parent Item', this.templateId, null, 1, 1);
    var widget = factory.create();

    this.state.contentList.push(widget);
    this.setStateForContentList(this.state.contentList);
  }

  removeContentAndItsSubListItems(index, event){
    var parentIndex = index + 1;

    var itemsToRemove = _.filter(this.state.contentList, function(item){
      return item.parent_index === parentIndex || item.sort_order === parentIndex;
    });

    var itemsToKeep = _.filter(this.state.contentList, function(item){
      return item.parent_index != parentIndex && item.sort_order != parentIndex;
    });

    this.setNewSortOrderForChildrenForParent(itemsToKeep, itemsToRemove);

    this.state.contentList = itemsToKeep;
    this.setState({thingsToDo: this.state.contentList});

    //want to always maintain at miniumum one list item on the page
    if(this.state.contentList.length == 0){
      this.addParentListItem();
    }
  }

  setNewSortOrderForChildrenForParent(itemsToKeep, itemsToRemove){
    var lastItemIndexToRemove = itemsToRemove[itemsToRemove.length - 1].sort_order;

    for(var i = 0; i < itemsToKeep.length; i++){
      var item = itemsToKeep[i];

      //update parent index for only sub list items past the index of the last content item removed
      if(item.sort_order > lastItemIndexToRemove){
        if(FieldHelper.isSubListItem(item)){
          item.parent_index -= itemsToRemove.length;
        }
      }

      item.sort_order = i + 1;
    }
  }

  render() {
    if(_.isEmpty(this.state.contentList)){
      var emptyContentProps = _.extend({editLink: this.props.editLink}, this.props);
      return (
        <div>
          <div className={!this.props.isEdit ? "hidden" : ""}>
            <button className="btn btn-primary" onClick={this.addParentListItem.bind(this)}>Add</button>
          </div>
          <EmptyContent {...emptyContentProps} />
        </div>
      );
    }
    else {
      var subListItemIndex = 0;
      let nodes = this.state.contentList.map((contentItem, index) => {
        var propsData = {
          contentItem: contentItem, isEdit: this.props.isEdit,
          contentList: this.state.contentList,
          setStateForContentList: this.setStateForContentList.bind(this),
          onRemove: this.removeContent.bind(this, index),
          onChange: this.updateContent.bind(this, index),
          templateId: this.templateId,
          index: index
        };
        var listItemProps = _.extend(propsData, this.props);

        //override onRemove function for list item if lit item is parent list item
        if(FieldHelper.isSubListItem(contentItem)){
          subListItemIndex++;
          listItemProps.subListItemIndex = subListItemIndex;
          return(
            <div key={index}>
              <SubListItem {...listItemProps} />
            </div>
          );
        }
        else{
          listItemProps.onRemove = this.removeContentAndItsSubListItems.bind(this, index);
          subListItemIndex = 0;
          return(
            <div key={index}>
              <ParentListItem {...listItemProps} />
            </div>
          );
        }
      });

      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='container List-page'>
            <div className='row List-container'>
              <div className='Content-panel List-Grid-Template List-template'>
                <EditLink {...this.props} />

                <div className={!this.props.isEdit ? "hidden" : ""}>
                  <button className="btn btn-primary" onClick={this.addParentListItem.bind(this)}>Add Group</button>
                </div>

                <div className={!this.props.isEdit ? 'List-Page-Read-Only' : 'List-page'}>
                  {nodes}
                </div>
              </div>
            </div>

            <div className={this.state.contentList.length > 0 && this.props.isEdit ? 'form-group' :
              'form-group hidden'}>
              <button type='submit' onClick={this.submit.bind(this)} className='btn btn-primary'>Save</button>
            </div>
          </div>
        </form>
      );
    }
  }
}

export default ListTemplate;
