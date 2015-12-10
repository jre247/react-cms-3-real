import React from 'react';
import ThingsToDoStore from '../stores/ThingsToDoStore';
import TThingsToDoActions from '../actions/ThingsToDoActions';

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
  handleSubmit(event) {
    event.preventDefault();

    var contents = [
      {
        name: 'Things To Do Description',
        description: 'Things To Do Description',
        value: this.state.thingsToDo[0].parentItem,
        contentType: 2,
        sortOrder: 1
      },
      {
        name: 'Things To Do Image Url',
        description: 'Proposal Image Url',
        value: this.state.thingsToDo[0].subListItems[0],
        contentType: 1,
        parentIndex: 1
        sortOrder: 2
      },
      {
        name: 'Things To Do Description 2',
        description: 'Things To Do Description 2',
        value: this.state.thingsToDo[0].parentItem,
        contentType: 2,
        sortOrder: 3
      },
      {
        name: 'Things To Do Image Url 2',
        description: 'Proposal Image Url 2',
        value: this.state.thingsToDo[0].subListItems[0],
        contentType: 1,
        parentIndex: 3
        sortOrder: 4
      },
    ];

    ThingsToDoActions.saveThingsToDoData(contents, this.props.history);
  }
  render() {
    var thingsToDoNodes = this.state.thingsToDo.map((thingToDo, index) => {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8'>
                <div className="form-group">
                  <textarea ref="description" className='form-control' name="description" placeholder="Desription"
                    value={thingToDo.parentItem} onChange={ThingsToDoActions.updateParentNode(index, thingToDo)}>
                  </textarea>
                </div>
                <div className="form-group">
                  <input ref="url" className='form-control' name="url" placeholder="Url"
                    value={thingToDo.subListItems[0]} onChange={ThingsToDoActions.updateChildNode(index, thingToDo)}/>
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
      <div className='row'>
        {thingsToDoNodes}
      </div>
    </div>
  );
}

export default EditTheProposal;
