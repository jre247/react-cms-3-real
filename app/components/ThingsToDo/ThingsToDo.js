import React from 'react';
import {Link} from 'react-router';
import ThingsToDoStore from '../../stores/ThingsToDoStore';
import ThingsToDoActions from '../../actions/ThingsToDoActions';
import EmptyContent from '../EmptyContent';
import SubListItem from '../Widgets/ListItem/SubListItem';
import ParentListItem from '../Widgets/ListItem/ParentListItem';
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
  render() {
    if(_.isEmpty(this.state.thingsToDo)){
      var emptyContentProps = {editLink: '/things-to-do/edit'}
      return (
        <EmptyContent {...emptyContentProps} />
      );
    }
    else {
      let thingsToDoNodes = this.state.thingsToDo.map((thingToDo, index) => {
          if(this.isSubListItem(thingToDo)){
            var subListItemProps = {listItem: thingToDo, isEdit: false};
            return (
              <SubListItem {...subListItemProps} />
            );
          }
          else{
            var listItemProps = {listItem: thingToDo, isEdit: false};
            return (
              <ParentListItem {...listItemProps} />
            );
          }
      });

      return (
        <div>
          <div className='Content-panel'>
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
