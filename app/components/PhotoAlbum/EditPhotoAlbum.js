import React from 'react';
import {_} from 'underscore';
import PhotoAlbumTemplate from '../Templates/PhotoAlbumTemplate/PhotoAlbumTemplate';

class EditPhotoAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 3;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    var propsData = _.extend({isEdit: true, editLink: '/photo-album/edit', readOnlyPageLink: '/photo-album',
      pageId: this.pageId}, this.props);

    return (
      <PhotoAlbumTemplate {...propsData} />
    );
  }
}

export default EditPhotoAlbum;
