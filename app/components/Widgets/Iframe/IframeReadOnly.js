import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';
import IframeElementReadOnly from './IframeElementReadOnly';

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
          <IframeElementReadOnly {...this.props} />
        </ContentSettings>
      </div>
    );
  }
}

export default IframeReadOnly;
