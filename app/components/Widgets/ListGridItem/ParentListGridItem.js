import React from 'react';
import {Link} from 'react-router';
import ParentListGridItemEdit from './ParentListGridItemEdit';
import ParentListGridItemReadOnly from './ParentListGridItemReadOnly';

class ParentListGridItem extends React.Component {
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
        <ParentListGridItemEdit {...this.props} />
      );
    }
    else{
      return (
        <ParentListGridItemReadOnly {...this.props} />
      );
    }
  }
}

export default ParentListGridItem;
