import React from 'react';
import {Link} from 'react-router';
import TheProposalStore from '../stores/TheProposalStore';
import TheProposalActions from '../actions/TheProposalActions';
import {_} from 'underscore';

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = TheProposalStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    TheProposalStore.listen(this.onChange);
    TheProposalActions.getProposalData();
  }
  componentWillUnmount() {
    TheProposalStore.unlisten(this.onChange);
  }
  render() {
    if(_.isEmpty(this.state.proposal)){
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
      var thingsToDoNodes = this.state.thingsToDo.map((thingToDo, index) => {
        return (
          <div>
            <div className="Edit-Content-Button">
              <Link className="Navigation-link" to="/things-to-do/edit">Edit</Link>
            </div>

            <div className="List-item-container">
              <div className={thingToDo.parentIndex > 0 ? 'Child-list-item' : 'Parent-list-item'}>
                <span>
                    {thingToDo.value}
                 </span>
              </div>
            </div>
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
  }
}

export default ThingsToDo;
