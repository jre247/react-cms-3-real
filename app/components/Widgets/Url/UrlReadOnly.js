import React from 'react';
import {Link} from 'react-router';

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
      <a ref="link" name="link" href={this.props.value}>{this.props.value}</a>
    );
  }
}

export default UrlReadOnly;
