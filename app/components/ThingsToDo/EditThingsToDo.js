import React from 'react';
import ThingsToDoStore from '../../stores/ThingsToDoStore';
import ThingsToDoActions from '../../actions/ThingsToDoActions';
import SubListItem from '../Widgets/ListItem/SubListItem';
import ParentListItem from '../Widgets/ListItem/ParentListItem';
import {_} from 'underscore';

class EditThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = ThingsToDoStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    ThingsToDoStore.listen(this.onChange);
    ThingsToDoActions.getThingsToDoData();
  }
  componentWillUnmount() {
    ThingsToDoStore.unlisten(this.onChange);
  }

  //TODO: put in helper
  isSubListItem(node){
    return node.parent_index > 0;
  }
  //TODO: put in helper
  isDescription(node){
    return node.content_type_id == 2;
  }

  //TODO: create function to return new content item
  addParentListItem(){
    var sortOrder = this.state.thingsToDo.length + 1;

    var content =
    {
      name: 'Things To Do Parent List Item',
      description: 'Things To Do Parent List Item',
      value: '',
      content_type_id: 2,
      sort_order: sortOrder,
      template_id: 4
    };

    this.state.thingsToDo.push(content);

    this.setState({thingsToDo: this.state.thingsToDo})
  }

  //TODO: create function to return new content item
  addSublistItem(index, event){
    debugger;
    var sortOrder = this.state.thingsToDo.length + 1;

    var description =
    {
        name: 'Things To Do Child List Item',
        description: 'Things To Do Child List Item',
        value: '',
        content_type_id: 2,
        parent_index: this.findParentIndex(sortOrder),
        sort_order: sortOrder,
        template_id: 4
    };
    this.state.thingsToDo.splice(index + 1, 0, description);

    sortOrder += 1;
    var link =
    {
        name: 'Things To Do Child List Item',
        description: 'Things To Do Child List Item',
        value: '',
        content_type_id: 5,
        parent_index: this.findParentIndex(sortOrder),
        sort_order: sortOrder,
        template_id: 4
    };
    this.state.thingsToDo.splice(index + 2, 0, link);

    this.setState({thingsToDo: this.state.thingsToDo})
  }

  findParentIndex(currentIndex){
    var parentIndex = 1;

    for(var index = currentIndex - 2; index > 0; index--){
      var listItem = this.state.thingsToDo[index];
      if(!listItem.parent_index){
        parentIndex = listItem.sort_order;
        break;
      }
    }

    return parentIndex;
  }

  removeContent(index, event){
    this.state.thingsToDo.splice(index, 1);
    this.setState({thingsToDo: this.state.thingsToDo});
  }

  removeContentAndItsSubListItems(index, event){
    var parentIndex = index + 1;

    var itemsToRemove = _.filter(this.state.thingsToDo, function(item){
      return item.parent_index === parentIndex || item.sort_order === parentIndex;
    });

    var itemsToKeep = _.filter(this.state.thingsToDo, function(item){
      return item.parent_index != parentIndex && item.sort_order != parentIndex;
    });

    this.saveNewSortOrderForAllItems(itemsToKeep, itemsToRemove);

    //this.state.thingsToDo = [];
    this.state.thingsToDo = itemsToKeep;
    this.setState({thingsToDo: this.state.thingsToDo});

    //want to always maintain at miniumum one list item on the page
    if(this.state.thingsToDo.length == 0){
      this.addParentListItem();
    }
  }

  saveNewSortOrderForAllItems(itemsToKeep, itemsToRemove){
    var lastItemIndexToRemove = itemsToRemove[itemsToRemove.length - 1].sort_order;

    for(var i = 0; i < itemsToKeep.length; i++){
      var item = itemsToKeep[i];

      //update parent index for only sub list items past the index of the last content item removed
      if(item.sort_order > lastItemIndexToRemove){
        if(this.isSubListItem(item)){
          item.parent_index -= itemsToRemove.length;
        }
      }

      item.sort_order = i + 1;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    //ThingsToDoActions.saveThingsToDoData(this.state.thingsToDo, this.props.history);
  }

  updateListItem(index, event){
    this.state.thingsToDo[index].value = event.target.value;
    this.setState({thingsToDo: this.state.thingsToDo});
  }

  submit(event){
    ThingsToDoActions.saveThingsToDoData(this.state.thingsToDo, this.props.history);
  }

  render() {
      let thingsToDoNodes = this.state.thingsToDo.map((thingToDo, index) => {
        if(this.isSubListItem(thingToDo)){
          //todo: put update list item inside list item module, same with remove content
          var subListItemProps = {listItem: thingToDo, isEdit: true,
            onChange: this.updateListItem.bind(this, index),
            onRemove: this.removeContent.bind(this, index)};

          return (
            <SubListItem {...subListItemProps} />
          );
        }
        else{
          //todo: put onAddSubListItem inside parent list item module
          //todo: put update list item inside list item module, same with remove content
          var parentListItemProps = {isEdit: true, listItem: thingToDo,
            onAddSubListItem: this.addSublistItem.bind(this, index),
            onChange: this.updateListItem.bind(this, index),
            onRemove: this.removeContentAndItsSubListItems.bind(this, index)};

          return (
            <ParentListItem {...parentListItemProps} />
          );
        }
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='container List-page'>
            <button className="btn btn-primary" onClick={this.addParentListItem.bind(this)}>Add</button>
            <div className='row List-container'>
              {thingsToDoNodes}
            </div>
            <div className={this.state.thingsToDo.length > 0 ? 'form-group' : 'form-group hidden'}>
              <button type='submit' onClick={this.submit.bind(this)} className='btn btn-primary'>Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditThingsToDo;
