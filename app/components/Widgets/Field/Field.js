import {_} from 'underscore';
import React from 'react';
import FieldEdit from './FieldEdit';
import FieldReadOnly from './FieldReadOnly';

class Field extends React.Component {
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
        <FieldEdit {...this.props} />
      );
    }
    else{
      return (
        <FieldReadOnly {...this.props} />
      );
    }
  }

}

export default Field;
