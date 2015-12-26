import React from 'react';
import ThingsToDoStore from '../../stores/ThingsToDoStore';
import ThingsToDoActions from '../../actions/ThingsToDoActions';
import {_} from 'underscore';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';

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

    //ThingsToDoActions.saveThingsToDoData(this.state.contentList, this.props.history);
  }
  setStateForContentList(){
    this.setState({contentList: this.state.contentList})
  }
  submit(event){
    ThingsToDoActions.saveThingsToDoData(this.state.contentList, this.props.history);
  }

  render() {
      let thingsToDoNodes = this.state.contentList.map((thingToDo, index) => {
        var propsData = {isEdit: false, contentList: this.state.contentList, editLink: '/things-to-do/edit'};
        return (
          <ListTemplate {...propsData} />
        );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='container List-page'>
            <button className="btn btn-primary" onClick={this.addParentListItem.bind(this)}>Add</button>
            <div className='row List-container'>
              {thingsToDoNodes}
            </div>
            <div className={this.state.contentList.length > 0 ? 'form-group' : 'form-group hidden'}>
              <button type='submit' onClick={this.submit.bind(this)} className='btn btn-primary'>Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditThingsToDo;
