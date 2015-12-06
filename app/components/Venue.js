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
    var venue = this.state.venue;
    return (
      <div className="Detail">
        <Link className="Navigation-link" to="/venue/edit">Edit</Link>

        <div className="Content-text">
          <span>
            {venue.name}
          </span>
        </div>

        <div className="Content-text">
          <span>
            {venue.ceremonytime}
          </span>
        </div>

        <img className="Content-large-image" src={venue.url} alt="Venue Image" />

        <div className="Content-text">
          <span> {venue.description} </span>
        </div>
      </div>
    );
  }
}

export default Venue;
