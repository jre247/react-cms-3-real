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

class ListTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 4;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  updateContent(index, event) {
    this.props.contentList[index].value = event.target.value;
    this.props.setStateForContentList();
  }

  removeContent(index, event){
    this.props.contentList.splice(index, 1);
    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentList();
  }

  addParentListItem(){
    var sortOrder = this.props.contentList.length + 1;
    var factory = new TitleFactory(sortOrder, 'List Parent Item',
      'List Parent Item', this.templateId, null, 1, 1);
    var widget = factory.create();

    this.props.contentList.push(widget);
    this.props.setStateForContentList();
  }

  removeContentAndItsSubListItems(index, event){
    var parentIndex = index + 1;

    var itemsToRemove = _.filter(this.props.contentList, function(item){
      return item.parent_index === parentIndex || item.sort_order === parentIndex;
    });

    var itemsToKeep = _.filter(this.props.contentList, function(item){
      return item.parent_index != parentIndex && item.sort_order != parentIndex;
    });

    this.setNewSortOrderForChildrenForParent(itemsToKeep, itemsToRemove);

    //this.props.contentList = [];
    this.props.contentList = itemsToKeep;
    this.setState({thingsToDo: this.props.contentList});

    //want to always maintain at miniumum one list item on the page
    if(this.props.contentList.length == 0){
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
    if(_.isEmpty(this.props.contentList)){
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
      let nodes = this.props.contentList.map((contentItem, index) => {
        var propsData = {
          contentItem: contentItem, isEdit: this.props.isEdit,
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
        </div>
      );
    }
  }
}

export default ListTemplate;
