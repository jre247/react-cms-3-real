import React from 'react';
import ImageUploadEdit from './ImageUploadEdit';
import ImageUploadReadOnly from './ImageUploadReadOnly';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  static onSave(contentItem){
    return contentItem;
  }

  render() {
    if(this.props.isEdit){
      return(
          <ImageUploadEdit {...this.props} />
      );
    }
    else{
      return (
          <ImageUploadReadOnly {...this.props} />
      );
    }
  }
}

export default ImageUpload;
