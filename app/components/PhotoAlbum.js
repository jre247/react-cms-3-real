import React from 'react';
import PhotoAlbumStore from '../stores/PhotoAlbumStore';
import PhotoAlbumActions from '../actions/PhotoAlbumActions';
import Carousel from './Carousel/Carousel';
import {Link} from 'react-router';
import {_} from 'underscore';

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
    let photoAlbumNodes = this.state.photoAlbum.map((photo, index) => {
      return (
        <div key={photo.sort_order} className="Photo">
            <img className="Content-small-image" src={photo.value}/>
        </div>
      );
    });

    if(_.isEmpty(this.state.photoAlbum)){
      return (
        <div>
          <div className="Edit-Content-Button">
            <Link className="Navigation-link" to="/photo-album/edit">Edit</Link>
          </div>

          <div className="Empty-Page-Content">
            <span>There is no content yet.</span>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <div className="Edit-Content-Button">
            <Link className="Navigation-link" to="/photo-album/edit">Edit</Link>
          </div>
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#largeCarouselModal">Open Modal</button>
          <div className="Photo-album-container">
            {photoAlbumNodes}
          </div>

          <div id="largeCarouselModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <Carousel {...this.state.photoAlbum} />
                </div>
              </div>
            </div>
          </div>

        </div>

      );
    }
  }
    // return (
    //   <div className="Detail">
    //     <img className="Content-small-image" src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xfl1/v/t1.0-9/11110451_928484358212_2031419656314985032_n.jpg?oh=9969b77e474d57ff095023a9be655c9f&oe=56EFD67D"/>
    //     <img className="Content-small-image" src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/12190078_10207642386968667_4983569545503341933_n.jpg?oh=0270b12b271788139391ccab795d37b4&oe=56DF764F"/>
    //     <img className="Content-small-image" src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/12122438_10207641487266175_3794466943909669980_n.jpg?oh=540ea2865ff66b8284a8a2d45363e1af&oe=56E66A4B"/>
    //   </div>
    // );

}

export default PhotoAlbum;
