import React from 'react';
import PhotoAlbumTemplate from '../Templates/PhotoAlbumTemplate/PhotoAlbumTemplate';
import {_} from 'underscore';

class PhotoAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 3;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    var propsData = _.extend({isEdit: false, editLink: '/photo-album/edit', pageId: this.pageId}, this.props);

    return (
      <PhotoAlbumTemplate {...propsData} />
    );
  }
}

export default PhotoAlbum;
