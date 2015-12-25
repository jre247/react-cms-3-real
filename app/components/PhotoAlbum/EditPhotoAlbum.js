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

  //TODO: create function to return new content item
  addPhoto(){
    var sortOrder = this.state.contentList.length + 1;

    var content =
    {
      name: 'Photo Album',
      description: 'Photo Album',
      value: '',
      content_type_id: 1,
      sort_order: sortOrder,
      template_id: 3
    };

    this.state.contentList.push(content);

    this.setState({contentList: this.state.contentList})
  }

  handleSubmit(event) {
    event.preventDefault();

    //PhotoAlbumActions.savePhotoAlbumData(this.state.photoAlbum, this.props.history);
  }

  updateContent(index, event){
    this.state.contentList[index].value = event.target.value;
    this.setState({contentList: this.state.contentList});
  }

  removeContent(index, event){
    this.state.contentList.splice(index, 1);
    this.setState({contentList: this.state.contentList});
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
