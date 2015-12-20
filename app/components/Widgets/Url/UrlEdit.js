import React from 'react';
import {Link} from 'react-router';

class UrlEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <input className='form-control' type='text' value={this.props.value} onChange={this.props.onChange}>
      </input>
    );
  }
}

export default UrlEdit;
