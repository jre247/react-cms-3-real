import React from 'react';
import {Link} from 'react-router';
import ShortDescriptionEdit from './ShortDescriptionEdit';
import ShortDescriptionReadOnly from './ShortDescriptionReadOnly';


class ShortDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(this.props.isEdit){
      return (
        <ShortDescriptionEdit {...this.props} />
      );
    }
    else{
      return (
        <ShortDescriptionReadOnly {...this.props} />
      );
    }
  }
}

export default ShortDescription;
