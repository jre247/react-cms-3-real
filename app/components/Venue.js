import React from 'react';
import {Link} from 'react-router';
import VenueStore from '../stores/VenueStore';
import VenueActions from '../actions/VenueActions';
import {_} from 'underscore';

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
    if(_.isEmpty(this.state.venue)){
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
            <span> {this.state.venue.eventDate} </span>
          </div>

          <div className="Venue-image-container">
            <img className="Content-large-image-percentage" src={this.state.venue.url} alt="Venue Image" />
          </div>

          <div className="List-items">

            <div>
              <span>
                  {this.state.venue.ceremonyTime}
               </span>
            </div>

            <div>
              <span>
                  {this.state.venue.cocktailHourTime}
              </span>
            </div>

            <div>
              <span>
                  {this.state.venue.receptionTime}
              </span>
            </div>

            <div>
              <span>
                  {this.state.venue.afterPartyTime}
              </span>
            </div>

          </div>

        </div>
      );
    }

  }
}

export default Venue;
