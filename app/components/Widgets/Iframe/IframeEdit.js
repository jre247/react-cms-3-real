import React from 'react';
import {Link} from 'react-router';

class IframeEdit extends React.Component {
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
        <div className="form-group Content-item">
          <input className='form-control' placeholder="Iframe Src"
            value={this.props.value} onChange={this.props.onChange}>
          </input>
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

export default IframeEdit;
