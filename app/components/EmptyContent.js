import React from 'react';
import {Link} from 'react-router';



class EmptyContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <div className={!this.props.isEdit ? "Edit-Content-Button" : "hidden"}>
          <Link className="Navigation-link" to={this.props.editLink}>Edit</Link>
        </div>

        <div className="Empty-Page-Content">
          <span>There is no content yet.</span>
        </div>
      </div>
    );
  }
}

export default EmptyContent;
