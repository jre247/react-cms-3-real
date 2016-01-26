import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';
var self;

class LongDescriptionEdit extends React.Component {
  constructor(props) {
    super(props);
    self = this;
  }

  render() {
    return (
      <div>
        <div className="Content-long-description-container content-container">
          <div className="Content-long-description Content-item">
            <textarea className='form-control Widget-input' placeholder="Long Description"
              value={this.props.value} onChange={this.props.onChange}>
            </textarea>
          </div>

          <ContentSettings {...this.props} />

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

export default LongDescriptionEdit;
