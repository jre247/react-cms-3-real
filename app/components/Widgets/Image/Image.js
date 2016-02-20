import React from 'react';
import Resizable from '../Components/Resizable';
import {_} from 'underscore';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onResize(sizeData){
    var width = sizeData.width;
    var height = sizeData.height;
  }

  render() {
    var propsData = _.extend({onResize: this.onResize.bind(this), isResizable: this.props.isResizable},
      this.props);

    if(this.props.imageSize == 'small'){
      return (
        <img className="Content-small-image widget image-width" src={this.props.value} alt="Image"
          style={this.props.styles} />
      );
    }
    else if(this.props.imageSize == 'medium'){
      return (
        <img className="Content-medium-image widget image-width" src={this.props.value} alt="Image" style={this.props.styles} />
      );
    }
    else{
      return (
        <Resizable {...propsData}>
          <img className="Content-extra-large-image-percentage widget image-width" src={this.props.value} style={this.props.styles} alt="Image" />
        </Resizable>
      );
    }
  }
}

export default Image;
