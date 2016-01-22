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

  static onSave(contentItem){
    contentItem.value = this.formatValue(contentItem.value);
    return contentItem;
  }

  static formatValue(contentValue){
    var httpProtocal = 'http://';
    var httpProtocalWithWww = 'http://www.'
    debugger;
    if(contentValue.indexOf(httpProtocalWithWww) < 0)
      return httpProtocalWithWww + contentValue;

    if(contentValue.indexOf(httpProtocal) < 0)
      return httpProtocal + contentValue;

    return contentValue;
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
