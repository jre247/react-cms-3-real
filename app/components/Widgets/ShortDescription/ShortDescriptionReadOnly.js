import React from 'react';
import {Link} from 'react-router';

class ShortDescriptionReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Content-long-description-container">
        <div className="Content-long-description">
            {this.props.value}
        </div>
      </div>
    );
  }
}

export default ShortDescriptionReadOnly;
