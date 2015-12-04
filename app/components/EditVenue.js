import React from 'react';

class EditVenue extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    var description = this.refs.description.getDOMNode().value;
    var name = this.refs.name.getDOMNode().value;
    var url = this.refs.url.getDOMNode().value;
    var ceremonyTime = this.refs.ceremonyTime.getDOMNode().value;

    //this.transitionTo('save-venue', {}, {description, name, url, ceremonyTime});
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
