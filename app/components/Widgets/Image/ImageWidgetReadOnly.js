import React from 'react';
import {Link} from 'react-router';
import Image from './Image';
import ContentSettings from '../Components/ContentSettings/ContentSettings';

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
        <ContentSettings {...this.props}>
          <Image {...this.props} />
        </ContentSettings>
      </div>
    )
  }
}

export default ImageWidgetReadOnly;
