import React from 'react';
import {Link} from 'react-router';
import ParentListItemEdit from './ParentListItemEdit';
import ParentListItemReadOnly from './ParentListItemReadOnly';

class ParentListItem extends React.Component {
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
        <ParentListItemEdit {...this.props} />
      );
    }
    else{
      return (
        <ParentListItemReadOnly {...this.props} />
      );
    }
  }
}

export default ParentListItem;
