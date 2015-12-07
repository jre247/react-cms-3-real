import React from 'react';
import {Link} from 'react-router';
import VenueStore from '../stores/VenueStore';
import VenueActions from '../actions/VenueActions';

class Venue extends React.Component {
  constructor(props) {
    super(props);
    this.state = VenueStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    VenueStore.listen(this.onChange);
    VenueActions.getVenueData();
  }
  componentWillUnmount() {
    VenueStore.unlisten(this.onChange);
  }
  render() {
    if(!this.state.venue){
      return (
        <div>
          <div className="Edit-Content-Button">
            <Link className="Navigation-link" to="/venue/edit">Edit</Link>
          </div>

          <div className="Empty-Page-Content">
            <span>There is no content yet.</span>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="Detail">
          <div className="Edit-Content-Button">
            <Link className="Navigation-link" to="/venue/edit">Edit</Link>
          </div>
          <div className="Content-text">
            <span>
              {this.state.venue.name}
            </span>
          </div>

          <div className="Content-text">
            <span>
              {this.state.venue.ceremonyTime}
           </span>
          </div>

          <img className="Content-large-image" src={this.state.url} alt="Venue Image" />

          <div className="Content-text">
            <span> {this.state.venue.description} </span>
          </div>
        </div>
      );
    }

  }
}

export default Venue;
