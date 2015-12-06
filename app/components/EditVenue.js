import React from 'react';
import VenueStore from '../stores/VenueStore';
import VenueActions from '../actions/VenueActions';

class EditVenue extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    var description = this.state.venue.description;
    var name = this.state.venue.name;
    var url = this.state.venue.url;
    var ceremonyTime = this.state.venue.ceremonyTime;

    var contents = [{
      name: 'Venue Name',
      description: 'Venue Name',
      value: name,
      contentType: 4
    },
    {
      name: 'Venue Image Url',
      description: 'Venue Image Url',
      value: url,
      contentType: 1,
    },
    {
      name: 'Venue Description',
      description: 'Venue Description',
      value: description,
      contentType: 2,
    },
    {
      name: 'Venue Ceremony Time',
      description: 'Venue Ceremony Time',
      value: ceremonyTime,
      contentType: 2,
    }];

    VenueActions.SaveVenue(contents);
  }
  render() {
    return (
      <div className="Detail">
          <h1 className="Heading Heading--alt">Edit Venue</h1>
          <div className="Content padBox">
            <form action="/save-venue" onSubmit={this.handleSubmit}>
              <p>
                <input ref="name" name="name" placeholder="Name"/>
              </p>
              <p>
                <input ref="url" name="url" placeholder="Url"/>
              </p>
              <p>
                <input ref="ceremonyTime" name="ceremonyTime" placeholder="Ceremony Time"/>
              </p>
              <p>
                <textarea ref="description" name="description" placeholder="Description"/>
              </p>

              <p>
                <button type="submit">Save</button>
              </p>
            </form>
          </div>
        </div>
    );
  }
}

export default EditVenue;
