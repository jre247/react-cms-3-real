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
      <div>
        <div className="Content-short-description-container">
          <div className="Content-short-description Content-item">
            <input className='form-control Widget-input' placeholder="Short description"
              value={this.props.value} onChange={this.props.onChange}>
            </input>
          </div>
          <div className="Widget-Remove-Button-Container">
            <div onClick={this.props.onRemove}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortDescriptionEdit;
