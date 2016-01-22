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
    var wwwProtocol = "www.";
    var httpProtocol = "http://";

    //if www is missing and http is not present
    if(contentValue.indexOf(wwwProtocol) < 0 && contentValue.indexOf(httpProtocol) < 0)
      return wwwProtocol + contentValue;

    debugger;
    // if www is missing, but http is present
    if(contentValue.indexOf(wwwProtocol) < 0 && contentValue.indexOf(httpProtocol) >= 0){
      var valueSplit = contentValue.split(httpProtocol);
      var valueFormatted = valueSplit[0] + wwwProtocol + valueSplit[1];
      return valueFormatted;
    }

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
