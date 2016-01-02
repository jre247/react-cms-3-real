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
      <div>
        <div className="Content-long-description-container">
          <div className="Content-long-description">
            <textarea className='form-control Widget-input' placeholder="Long Description"
              value={this.props.value} onChange={this.props.onChange}>
            </textarea>
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

export default LongDescriptionEdit;
