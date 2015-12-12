import React from 'react';
import {Link} from 'react-router';
import ThingsToDoStore from '../stores/ThingsToDoStore';
import ThingsToDoActions from '../actions/ThingsToDoActions';
import {_} from 'underscore';

class ThingsToDo extends React.Component {
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
  render() {
    if(_.isEmpty(this.state.thingsToDo)){
      return (
        <div>
          <div className="Edit-Content-Button">
            <Link className="Navigation-link" to="/things-to-do/edit">Edit</Link>
          </div>

          <div className="Empty-Page-Content">
            <span>There is no content yet.</span>
          </div>
        </div>
      );
    }
    else {
        let thingsToDoNodes = this.state.thingsToDo.map((thingToDo, index) => {
          if(this.isSubListItem(thingToDo)){
            if(this.isDescription(thingToDo)){
              return (
                <div key={thingToDo.sort_order} className='container'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <div className="form-group Sub-list-item">
                        <span ref="description" name="description"> {thingToDo.value} </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            else{
              return (
                <div key={thingToDo.sort_order} className='container'>
                  <div className='row'>
                    <div className='col-sm-8'>
                      <div className="form-group Sub-list-item">
                        <a ref="link" name="link" href={thingToDo.value}>{thingToDo.value}</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

          }
          else{
            return (
              <div key={thingToDo.sort_order} className='container List-item-group'>
                <div className='row'>
                  <div className='col-sm-8'>
                    <div className="form-group">
                      <span ref="description" name="description">
                        {thingToDo.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
      });

      return (
        <div>
          <div className='container'>
            <div className="Edit-Content-Button">
              <Link className="Navigation-link" to="/things-to-do/edit">Edit</Link>
            </div>
            <div className='row List-page'>
              {thingsToDoNodes}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ThingsToDo;
