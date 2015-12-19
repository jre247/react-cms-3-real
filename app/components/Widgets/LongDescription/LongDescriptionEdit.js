import React from 'react';
import {Link} from 'react-router';

class LongDescriptionEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <textarea className='form-control' 
        value={this.props.value} onChange={this.props.onChange}>
      </textarea>
    );
  }
}

export default LongDescriptionEdit;
