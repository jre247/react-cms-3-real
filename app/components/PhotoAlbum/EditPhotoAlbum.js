import React from 'react';
import PhotoAlbumStore from '../../stores/PhotoAlbumStore';
import PhotoAlbumActions from '../../actions/PhotoAlbumActions';
import {_} from 'underscore';

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

  updatePhoto(index, event){
    this.state.contentList[index].value = event.target.value;
    this.setState({contentList: this.state.contentList});
  }

  removePhoto(index, event){
    this.state.contentList.splice(index, 1);
    this.setState({contentList: this.state.contentList});
  }

  submit(event){
    PhotoAlbumActions.savePhotoAlbumData(this.state.contentList, this.props.history);
  }

  //TODO: create field component that will figure out what kind of field to render
  render() {
    let nodes = this.state.contentList.map((photo, index) => {
      return (
        <div key={photo.sort_order} className='container'>
          <div className='row'>
            <div className='col-sm-8'>
              <div className="form-group">
                <input ref="url" className='form-control' name="url" placeholder="Url"
                  value={photo.value} onChange={this.updatePhoto.bind(this, index)}/>
              </div>
            </div>
            <div className="col-sm-2">
              <div onClick={this.removePhoto.bind(this, index)}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='container'>
            <button className="btn btn-primary" onClick={this.addPhoto.bind(this)}>Add</button>
            <div className='row Photo-album-content'>
              {nodes}
            </div>
            <div className={this.state.contentList.length > 0 ? 'form-group' : 'form-group hidden'}>
              <button type='submit' onClick={this.submit.bind(this)} className='btn btn-primary'>Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPhotoAlbum;
