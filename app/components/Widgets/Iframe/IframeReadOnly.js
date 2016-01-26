import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';

class IframeReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Content-iframe-container">
        <ContentSettings {...this.props}>
          <div className="Content-item">
            <iframe src={this.props.value} className="Content-iframe">
            </iframe>
          </div>
        </ContentSettings>
      </div>
    );
  }
}

export default IframeReadOnly;
