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
  addParentListItem(){
    var sortOrder = this.state.contentList.length + 1;

    var content =
    {
      name: 'Things To Do Parent List Item',
      description: 'Things To Do Parent List Item',
      value: '',
      content_type_id: 2,
      sort_order: sortOrder,
      template_id: 4
    };

    this.state.contentList.push(content);
    this.state.setStateForContentList();
  }

  submit(event){
    ThingsToDoActions.saveThingsToDoData(this.state.contentList, this.props.history);
  }


  render() {
    var propsData = {isEdit: false, contentList: this.state.contentList, editLink: '/things-to-do/edit',
      addParentListItem: this.addParentListItem.bind(this)};

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='container List-page'>
            <button className="btn btn-primary" onClick={this.addParentListItem.bind(this)}>Add</button>

            <div className='row List-container'>
              <ListTemplate {...propsData} />
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
