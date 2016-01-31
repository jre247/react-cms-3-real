import React from 'react';
import TitleElementReadOnly from './TitleElementReadOnly';
import ContentSettings from '../Components/ContentSettings/ContentSettings';

class TitleReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Content-title-container Content-item-container">
        <ContentSettings {...this.props}>
          <TitleElementReadOnly {...this.props} />
        </ContentSettings>
      </div>
    );
  }
}

export default TitleReadOnly;
