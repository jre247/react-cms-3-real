import React from 'react';
import {Link} from 'react-router';
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
    return (
        <div className="Content-long-description-container">
          <div className="Content-long-description">
            <ContentSettings {...this.props}>
              {this.props.value}
            </ContentSettings>
          </div>
        </div>
    );
  }
}

export default LongDescriptionReadOnly;
