import React from 'react';
import {Link} from 'react-router';

class UrlEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="url-widget">
        <div className="form-group Content-item">
          <input className='form-control' type='text' placeholder="Link" value={this.props.value}
            onChange={this.props.onChange} autoFocus/>
        </div>
        <div className="Widget-Remove-Button-Container">
          <div onClick={this.props.onRemove}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default UrlEdit;
