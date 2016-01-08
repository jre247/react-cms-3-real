import React from 'react';
import {Link} from 'react-router';

class EditLink extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(!this.props.isAuthenticated){
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
