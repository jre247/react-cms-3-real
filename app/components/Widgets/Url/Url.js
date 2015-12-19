import React from 'react';
import {Link} from 'react-router';
import UrlEdit from './UrlEdit';
import UrlReadOnly from './UrlReadOnly';


class Url extends React.Component {
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
        <UrlEdit {...this.props} />
      );
    }
    else{
      return (
        <UrlReadOnly {...this.props} />
      );
    }
  }
}

export default Url;
