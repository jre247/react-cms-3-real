import React from 'react';
import {Link} from 'react-router';
import PhotoAlbumTemplateEdit from './PhotoAlbumTemplateEdit';
import PhotoAlbumTemplateReadOnly from './PhotoAlbumTemplateReadOnly';

class PhotoAlbumTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(this.props.isEdit){
      return (
        <PhotoAlbumTemplateEdit {...this.props} />
      );
    }
    else{
      return (
        <PhotoAlbumTemplateReadOnly {...this.props} />
      );
    }
  }
}

export default PhotoAlbumTemplate;
