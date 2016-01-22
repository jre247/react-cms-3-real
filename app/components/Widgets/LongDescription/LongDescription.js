import React from 'react';
import {Link} from 'react-router';
import LongDescriptionEdit from './LongDescriptionEdit';
import LongDescriptionReadOnly from './LongDescriptionReadOnly';


class LongDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  static onSave(contentItem){
    return contentItem;
  }

  render() {
    if(this.props.isEdit){
      return (
        <LongDescriptionEdit {...this.props} />
      );
    }
    else{
      return (
        <LongDescriptionReadOnly {...this.props} />
      );
    }
  }
}

export default LongDescription;
