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

  addListItem(){
    debugger;
    var parentSortOrder = this.state.thingsToDo.length + 1;
    var childSortOrder = parentSortOrder + 1;

    var contents = [
      {
        name: 'Things To Do Parent List Item',
        description: 'Things To Do Parent List Item',
        value: '',
        contentType: 2,
        sortOrder: parentSortOrder
      },
      {
        name: 'Things To Do Child List Item',
        description: 'Things To Do Child List Item',
        value: '',
        contentType: 1,
        parentIndex: parentSortOrder,
        sortOrder: childSortOrder
      }
    ];

    var self = this;
    _.each(contents, function(item){
      self.state.thingsToDo.push(item);
    });

    this.forceUpdate();
  }

  handleSubmit(event) {
    event.preventDefault();

    ThingsToDoActions.saveThingsToDoData(this.state.thingsToDo, this.props.history);
  }
  render() {
      debugger;
      let thingsToDoNodes = this.state.thingsToDo.map((thingToDo, index) => {
      return (
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-8'>
                  <div className="form-group">
                    <textarea ref="description" className='form-control' name="description" placeholder="Desription"
                      value={thingToDo.value} onChange={ThingsToDoActions.updateListItem.bind(this, index)}>
                    </textarea>
                  </div>
                  <div className="form-group Sub-list-item">
                    <input ref="url" className='form-control' name="url" placeholder="Url"
                      value={thingToDo.value} onChange={ThingsToDoActions.updateListItem.bind(this, index)}/>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    });

    return (
      <div className='container'>
        <button onClick={this.addListItem.bind(this)}>Add</button>
        <div className='row'>
          {thingsToDoNodes}
        </div>
        <div className="form-group">
          <button type='submit' className='btn btn-primary'>Save</button>
        </div>
      </div>
    );
  }
}

export default EditThingsToDo;
