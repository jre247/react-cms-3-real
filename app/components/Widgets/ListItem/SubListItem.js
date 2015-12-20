import React from 'react';
import {Link} from 'react-router';
import LongDescription from '../LongDescription/LongDescription';
import Url from '../Url/Url';
import SubListItemEdit from './SubListItemEdit';
import SubListItemReadOnly from './SubListItemReadOnly';

class SubListItem extends React.Component {
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
        <SubListItemEdit {...this.props} />
      );
    }
    else{
      return (
        <SubListItemReadOnly {...this.props} />
      );
    }
  }
}

export default SubListItem;
