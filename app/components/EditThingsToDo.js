import React from 'react';
import ThingsToDoStore from '../stores/ThingsToDoStore';
import ThingsToDoActions from '../actions/ThingsToDoActions';
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

  HandleClick(){
    debugger;
    ThingsToDoActions.addListItem();

    //this.forceUpdate();
  }

  componentDidMount() {
    ThingsToDoStore.listen(this.onChange);
    ThingsToDoActions.getThingsToDoData();
  }
  componentWillUnmount() {
    ThingsToDoStore.unlisten(this.onChange);
    ThingsToDoStore.unlisten(this.onClick);
  }


  isSubListItem(node){
    return node.parentIndex > 0;
  }

  addParentListItem(){
    var sortOrder = this.state.thingsToDo.length + 1;

    var content =
    {
      name: 'Things To Do Parent List Item',
      description: 'Things To Do Parent List Item',
      value: '',
      contentType: 2,
      sortOrder: sortOrder
    };

    this.state.thingsToDo.push(content);

    this.forceUpdate();
  }

  addSublistItem(){
    var sortOrder = this.state.thingsToDo.length + 1;

    var content =
    {
        name: 'Things To Do Child List Item',
        description: 'Things To Do Child List Item',
        value: '',
        contentType: 1,
        parentIndex: this.findParentIndex(sortOrder),
        sortOrder: sortOrder
    };

    this.state.thingsToDo.push(content);

    this.forceUpdate();
  }

  findParentIndex(currentIndex){
    var parentIndex = 1;

    for(var index = currentIndex - 2; index > 0; index--){
      var listItem = this.state.thingsToDo[index];
      if(!listItem.parentIndex){
        parentIndex = listItem.sortOrder;
        break;
      }
    }

    return parentIndex;
  }

  handleSubmit(event) {
    event.preventDefault();

    ThingsToDoActions.saveThingsToDoData(this.state.thingsToDo, this.props.history);
  }
  render() {
      let thingsToDoNodes = this.state.thingsToDo.map((thingToDo, index) => {
        if(this.isSubListItem(thingToDo)){
          return (
            <div key={thingToDo.sortOrder} className='container'>
              <div className='row'>
                <div className='col-sm-8'>
                  <div className="form-group Sub-list-item">
                    <input ref="url" className='form-control' name="url" placeholder="Url"
                      value={thingToDo.value} onChange={ThingsToDoActions.updateListItem.bind(this, index)}/>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        else{
          return (
            <div key={thingToDo.sortOrder} className='container List-item-group'>
              <div className='row'>
                <div className='col-sm-8 Add-sub-list-item'>
                  <div className="form-group">
                    <button className="btn btn-primary" onClick={this.addSublistItem.bind(this)}>Add Sub List Item</button>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-8'>
                  <div className="form-group">
                    <textarea ref="description" className='form-control' name="description" placeholder="Desription"
                      value={thingToDo.value} onChange={ThingsToDoActions.updateListItem.bind(this, index)}>
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          );
        }
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='container'>
            <button className="btn btn-primary" onClick={this.addParentListItem.bind(this)}>Add</button>
            <div className='row List-container'>
              {thingsToDoNodes}
            </div>
            <div className={this.state.thingsToDo.length > 0 ? 'form-group' : 'form-group hidden'}>
              <button type='submit' className='btn btn-primary'>Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditThingsToDo;
