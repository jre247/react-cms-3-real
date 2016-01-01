import React from 'react';
import {Link} from 'react-router';

class ShortDescriptionEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-6 col-md-offset-3'>
          <div className="form-group">
            <input className='form-control' placeholder="Short description"
              value={this.props.value} onChange={this.props.onChange}>
            </input>
          </div>
        </div>
        <div className="col-sm-2">
          <div onClick={this.props.onRemove}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortDescriptionEdit;
