import React from 'react';
import PhotoAlbumStore from '../../stores/PhotoAlbumStore';
import PhotoAlbumActions from '../../actions/PhotoAlbumActions';

class PhotoAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = PhotoAlbumStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    PhotoAlbumStore.listen(this.onChange);
    PhotoAlbumActions.getPhotoAlbumData();
  }

  componentWillUnmount() {
    PhotoAlbumStore.unlisten(this.onChange);
  }

  //TODO: create field component that will figure out what kind of field to render
  render() {
    var propsData = {contentList: this.state.contentList, selectedPhoto: this.state.selectedPhoto, editLink: '/photo-album/edit',
      isEdit: false};

    <PhotoAlbumTemplate {...propsData} />
  }
}

export default PhotoAlbum;
