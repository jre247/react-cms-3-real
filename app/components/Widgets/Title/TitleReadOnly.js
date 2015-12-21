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
      <div>
        <span> {this.props.value} </span>
      </div>
    );
  }
}

export default TitleReadOnly;
