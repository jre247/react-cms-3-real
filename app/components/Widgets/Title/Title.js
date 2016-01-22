import React from 'react';
import {Link} from 'react-router';
import TitleEdit from './TitleEdit';
import TitleReadOnly from './TitleReadOnly';

class Title extends React.Component {
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
      return(
          <TitleEdit {...this.props} />
      );
    }
    else{
      return (
          <TitleReadOnly {...this.props} />
      );
    }
  }
}

export default Title;
