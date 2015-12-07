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
      contentType: 4,
      sortOrder: 1
    },
    {
      name: 'Venue Image Url',
      description: 'Venue Image Url',
      value: url,
      contentType: 1,
      sortOrder: 2
    },
    {
      name: 'Venue Description',
      description: 'Venue Description',
      value: description,
      contentType: 2,
      sortOrder: 3
    },
    {
      name: 'Venue Ceremony Time',
      description: 'Venue Ceremony Time',
      value: ceremonyTime,
      contentType: 2,
      sortOrder: 4
    }];

    VenueActions.saveVenueData(contents);
  }
  render() {
    return (
      <div className="Detail">
          <h1 className="Heading Heading--alt">Edit Venue</h1>
          <div className="Content padBox">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-8'>
                    <div className="form-group">
                      <input ref="name" className='form-control' name="name" placeholder="Name" value={this.state.venue.name}
                        onChange={VenueActions.updateName} autoFocus/>
                    </div>
                    <div className="form-group">
                      <input ref="url" className='form-control' name="url" placeholder="Url" value={this.state.venue.url}
                        onChange={VenueActions.updateUrl}/>
                    </div>
                    <div className="form-group">
                      <input ref="ceremonyTime" className='form-control' name="ceremonyTime" placeholder="Ceremony Time"
                        value={this.state.venue.ceremonyTime} onChange={VenueActions.updateCeremonyTime}/>
                    </div>
                    <div className="form-group">
                      <textarea ref="description" className='form-control' name="description" placeholder="Description"
                        value={this.state.venue.timelineOne} onChange={VenueActions.updateTimelineOne}/>
                    </div>
                    <div className="form-group">
                      <textarea ref="description" className='form-control' name="description" placeholder="Description"
                        value={this.state.venue.timelineTwo} onChange={VenueActions.updateTimelineTwo}/>
                    </div>

                    <div className="form-group">
                      <button type='submit' className='btn btn-primary'>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default EditVenue;
