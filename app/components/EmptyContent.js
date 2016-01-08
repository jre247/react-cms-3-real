import React from 'react';
import {Link} from 'react-router';
import EditLink from './EditLink';

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
          <EditLink {...this.props} />
        </div>

        <div className="Empty-Page-Content">
          <span>There is no content yet.</span>
        </div>
      </div>
    );
  }
}

export default EmptyContent;
