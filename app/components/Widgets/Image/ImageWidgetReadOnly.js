import React from 'react';
import {Link} from 'react-router';
import Image from './Image';

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
        <Image {...this.props} />
      </div>
    )
  }
}

export default ImageWidgetReadOnly;
