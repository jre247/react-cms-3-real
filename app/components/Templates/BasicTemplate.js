import React from 'react';
import {Link} from 'react-router';
import BasicTemplateEdit from './BasicTemplateEdit';
import BasicTemplateReadOnly from './BasicTemplateReadOnly';

class BasicTemplate extends React.Component {
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
        <BasicTemplateEdit {...this.props} />
      );
    }
    else{
      return (
        <BasicTemplateReadOnly {...this.props} />
      );
    }
  }
}

export default BasicTemplate;
