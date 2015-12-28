import React from 'react';
import {Link} from 'react-router';

class IframeReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Content-iframe-container">
        <iframe src={this.props.value} className="Content-iframe">
        </iframe>
      </div>
    );
  }
}

export default IframeReadOnly;
