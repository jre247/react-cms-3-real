import React from 'react';
import {Link} from 'react-router';
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
          <div className="Content-short-description">
              {this.props.value}
          </div>
        </ContentSettings>
      </div>
    );
  }
}

export default ShortDescriptionReadOnly;
