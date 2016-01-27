import React from 'react';
import ContentSettings from '../Components/ContentSettings/ContentSettings';
import UrlElementReadOnly from './UrlElementReadOnly';

class UrlReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="content-url-container content-container">
        <ContentSettings {...this.props}>
          <UrlElementReadOnly {...this.props} />
        </ContentSettings>
      </div>
    );
  }
}

export default UrlReadOnly;
