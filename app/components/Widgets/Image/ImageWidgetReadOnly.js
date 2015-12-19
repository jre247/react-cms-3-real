import React from 'react';
import {Link} from 'react-router';

class ImageWidgetReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Content-image-container">
        <img className="Content-extra-large-image-percentage" src={this.props.value} alt="Image" />
      </div>
    );
  }
}

export default ImageWidgetReadOnly;
