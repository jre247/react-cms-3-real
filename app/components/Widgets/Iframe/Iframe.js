import React from 'react';
import {Link} from 'react-router';
import IframeEdit from './IframeEdit';
import IframeReadOnly from './IframeReadOnly';


class Iframe extends React.Component {
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
        <IframeEdit {...this.props} />
      );
    }
    else{
      return (
        <IframeReadOnly {...this.props} />
      );
    }
  }
}

export default Iframe;
