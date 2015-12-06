import React from 'react';
import VenueStore from '../stores/VenueStore';
import VenueActions from '../actions/VenueActions';

class EditVenue extends React.Component {
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
  handleSubmit(event) {
    event.preventDefault();
    var description = this.state.description;
    var name = this.state.name;
    var url = this.state.url;
    var ceremonyTime = this.state.ceremonyTime;

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
          <form onSubmit={this.handleSubmit.bind(this)}>
              <p>
                <input ref="name" name="name" placeholder="Name" value={this.state.venue.name}
                  onChange={VenueActions.updateName}/>
              </p>
              <p>
                <input ref="url" name="url" placeholder="Url" value={this.state.url}/>
              </p>
              <p>
                <input ref="ceremonyTime" name="ceremonyTime" placeholder="Ceremony Time" value={this.state.ceremonyTime}/>
              </p>
              <p>
                <textarea ref="description" name="description" placeholder="Description" value={this.state.description}/>
              </p>

              <p>
                <button type='submit' className='btn btn-primary'>Save</button>
              </p>
            </form>
          </div>
        </div>
    );
  }
}

export default EditVenue;
