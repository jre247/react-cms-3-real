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
        <ContentSettings {...this.props}>
          <div className="Content-long-description">
            {this.props.value}
          </div>
        </ContentSettings>
      </div>

    );
  }
}

export default LongDescriptionReadOnly;
