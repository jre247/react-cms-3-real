import React from 'react';
import {Link} from 'react-router';

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
      <div className="Content-title-container">
        <div className="Content-title">
            {this.props.value}
        </div>
      </div>
    );
  }
}

export default TitleReadOnly;
