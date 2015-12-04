import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);

    // let socket = io.connect();
    //
    // socket.on('onlineUsers', (data) => {
    //   NavbarActions.updateOnlineUsers(data);
    // });
    //
    // $(document).ajaxStart(() => {
    //   NavbarActions.updateAjaxAnimation('fadeIn');
    // });
    //
    // $(document).ajaxComplete(() => {
    //   setTimeout(() => {
    //     NavbarActions.updateAjaxAnimation('fadeOut');
    //   }, 750);
    // });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {

  }

  render() {
    return (

      <div className='Navigation' role="navigation">
          <Link className="Navigation-link" to="/">Home</Link>
          <Link className="Navigation-link" to="/our-story">Our Story</Link>
          <Link className="Navigation-link" to="/venue">The Wedding</Link>
          <Link className="Navigation-link" to="/photo-album">Photo Album</Link>
          <Link className="Navigation-link" to="/accomodations">Accomodations</Link>
          <Link className="Navigation-link" to="/gift-registry">Gift Registry</Link>
      </div>
    );
  }
}

export default Navbar;
