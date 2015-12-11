import React from 'react';
import ThingsToDoStore from '../stores/ThingsToDoStore';
import ThingsToDoActions from '../actions/ThingsToDoActions';

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
  addListItem(event){
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

    this.state.thingsToDo.concat(contents);
  }
  handleSubmit(event) {
    event.preventDefault();


    // var contents = [
    //   {
    //     name: 'Things To Do Description',
    //     description: 'Things To Do Description',
    //     value: this.state.thingsToDo[0].value,
    //     contentType: 2,
    //     sortOrder: 1
    //   },
    //   {
    //     name: 'Things To Do Image Url',
    //     description: 'Proposal Image Url',
    //     value: this.state.thingsToDo[0].value,
    //     contentType: 1,
    //     parentIndex: 1,
    //     sortOrder: 2
    //   },
    //   {
    //     name: 'Things To Do Description 2',
    //     description: 'Things To Do Description 2',
    //     value: this.state.thingsToDo[0].parentItem,
    //     contentType: 2,
    //     sortOrder: 3
    //   },
    //   {
    //     name: 'Things To Do Image Url 2',
    //     description: 'Proposal Image Url 2',
    //     value: this.state.thingsToDo[0].subListItems[0],
    //     contentType: 1,
    //     parentIndex: 3,
    //     sortOrder: 4
    //   },
    // ];

    ThingsToDoActions.saveThingsToDoData(this.thingsToDo, this.props.history);
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
                  <div className="form-group">
                    <button type='submit' className='btn btn-primary'>Save</button>
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
      </div>
    );
  }
}

export default EditThingsToDo;
