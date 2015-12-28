import React from 'react';
import {Link} from 'react-router';
import ImageWidgetEdit from './ImageWidgetEdit';
import ImageWidgetReadOnly from './ImageWidgetReadOnly';

class ImageWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(this.props.isEdit){
      return(
          <ImageWidgetEdit {...this.props} />
      );
    }
    else{
      return (
          <ImageWidgetReadOnly {...this.props} />
      );
    }
  }
}

export default ImageWidget;
