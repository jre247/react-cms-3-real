import React from 'react';
import {Link} from 'react-router';

class LongDescriptionEdit extends React.Component {
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
            <textarea className='form-control'
              value={this.props.value} onChange={this.props.onChange}>
            </textarea>
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

export default LongDescriptionEdit;
