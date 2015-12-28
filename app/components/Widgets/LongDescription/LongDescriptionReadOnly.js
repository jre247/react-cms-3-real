import React from 'react';
import {Link} from 'react-router';

class LongDescriptionReadOnly extends React.Component {
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

export default LongDescriptionReadOnly;
