import React from 'react';
import {Link} from 'react-router';
import AuthStore from '../stores/AuthStore';

class EditLink extends React.Component {
  constructor(props) {
    super(props);
    this.authState = AuthStore.getState();
  }

  render() {
    debugger;
    if(!this.authState.isPublisher){
      return(
        <span/>
      );
    }
    else{
      return (
        <div className={!this.props.isEdit ? "Edit-Content-Button" : "hidden"}>
          <Link className="Navigation-link" to={this.props.editLink}>Edit</Link>
        </div>
      );
    }
  }
}

export default EditLink;
