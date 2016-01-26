import React from 'react';
import ShortDescriptionElementReadOnly from './ShortDescriptionElementReadOnly';
import ContentSettings from '../Components/ContentSettings/ContentSettings';

class ShortDescriptionReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Content-short-description-container">
        <ContentSettings {...this.props}>
          <ShortDescriptionElementReadOnly {...this.props} />
        </ContentSettings>
      </div>
    );
  }
}

export default ShortDescriptionReadOnly;
