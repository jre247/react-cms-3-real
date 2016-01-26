import React from 'react';
import LongDescriptionElementReadOnly from './LongDescriptionElementReadOnly';
import ContentSettings from '../Components/ContentSettings/ContentSettings';

class LongDescriptionReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    debugger;
    return (
      <div className="Content-long-description-container">
        <ContentSettings {...this.props}>
          <LongDescriptionElementReadOnly {...this.props} />
        </ContentSettings>
      </div>
    );
  }
}

export default LongDescriptionReadOnly;
