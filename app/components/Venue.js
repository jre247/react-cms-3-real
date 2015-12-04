import React from 'react';
import {Link} from 'react-router';

class Venue extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
        <Link className="Navigation-link" to="/venue/edit">Edit</Link>

        Hello from Venue Component
      </div>
    );
  }
}

export default Venue;
