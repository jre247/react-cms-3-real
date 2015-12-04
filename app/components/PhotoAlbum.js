import React from 'react';
import {Link} from 'react-router';


class PhotoAlbum extends React.Component {
  constructor(props) {
    super(props);
    //this.state = NavbarStore.getState();
    //this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
  //  NavbarStore.listen(this.onChange);
  //  NavbarActions.getCharacterCount();


  }

  componentWillUnmount() {
    //NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
  //  this.setState(state);
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div className="Detail">
        <img className="Content-small-image" src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xfl1/v/t1.0-9/11110451_928484358212_2031419656314985032_n.jpg?oh=9969b77e474d57ff095023a9be655c9f&oe=56EFD67D"/>
        <img className="Content-small-image" src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/12190078_10207642386968667_4983569545503341933_n.jpg?oh=0270b12b271788139391ccab795d37b4&oe=56DF764F"/>
        <img className="Content-small-image" src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/12122438_10207641487266175_3794466943909669980_n.jpg?oh=540ea2865ff66b8284a8a2d45363e1af&oe=56E66A4B"/>
      </div>
    );
  }
}

export default PhotoAlbum;
