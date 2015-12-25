import React from 'react';
import PhotoAlbumStore from '../../stores/PhotoAlbumStore';
import PhotoAlbumActions from '../../actions/PhotoAlbumActions';
import {_} from 'underscore';
import PhotoAlbumTemplate from '../Templates/PhotoAlbumTemplate/PhotoAlbumTemplate';

class EditPhotoAlbum extends React.Component {
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

  handleSubmit(event) {
    event.preventDefault();

    //PhotoAlbumActions.savePhotoAlbumData(this.state.photoAlbum, this.props.history);
  }

  setStateForContentList(){
    this.setState({contentList: this.state.contentList})
  }
  submit(event){
    PhotoAlbumActions.savePhotoAlbumData(this.state.contentList, this.props.history);
  }

  render() {
    var propsData = {contentList: this.state.contentList, selectedPhoto: this.state.selectedPhoto, isEdit: true,
      submit: this.submit.bind(this), setStateForContentList: this.setStateForContentList.bind(this)};
    return (
      <PhotoAlbumTemplate {...propsData} />
    );
  }
}

export default EditPhotoAlbum;
