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

    var contents = [
      {
        name: 'Venue Name',
        description: 'Venue Name',
        value: this.state.venue.name,
        contentType: 4,
        sortOrder: 1
      },
      {
        name: 'Venue Event Date',
        description: 'Venue Event Date',
        value: this.state.venue.eventDate,
        contentType: 2,
        sortOrder: 2
      },
      {
        name: 'Venue Image Url',
        description: 'Venue Image Url',
        value: this.state.venue.url,
        contentType: 1,
        sortOrder: 3
      },
      {
        name: 'Venue Ceremony Time',
        description: 'Venue Ceremony Time',
        value: this.state.venue.ceremonyTime,
        contentType: 2,
        sortOrder: 4
      },
      {
        name: 'Venue Cockailtail Hour',
        description: 'Venue Cockailtail Hour',
        value: this.state.venue.cocktailHourTime,
        contentType: 2,
        sortOrder: 5
      },
      {
        name: 'Venue Reception',
        description: 'Venue Reception',
        value: this.state.venue.receptionTime,
        contentType: 2,
        sortOrder: 6
      },
      {
        name: 'Venue After Party',
        description: 'Venue After Party',
        value: this.state.venue.afterPartyTime,
        contentType: 2,
        sortOrder: 7
      }
    ];

    VenueActions.saveVenueData(contents, this.props.history);
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
                      <input ref="eventDate" className='form-control' name="eventDate" placeholder="Date" value={this.state.venue.eventDate}
                        onChange={VenueActions.updateEventDate}/>
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
                      <textarea ref="cocktailHourTime" className='form-control' name="cocktailHourTime" placeholder="Cocktail Hour"
                        value={this.state.venue.cocktailHourTime} onChange={VenueActions.updateCocktailHourTime}/>
                    </div>
                    <div className="form-group">
                      <textarea ref="receptionTime" className='form-control' name="receptionTime" placeholder="Reception"
                        value={this.state.venue.receptionTime} onChange={VenueActions.updateReceptionTime}/>
                    </div>
                    <div className="form-group">
                      <textarea ref="afterPartyTime" className='form-control' name="afterPartyTime" placeholder="After Party"
                        value={this.state.venue.afterPartyTime} onChange={VenueActions.updateAfterPartyTime}/>
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
