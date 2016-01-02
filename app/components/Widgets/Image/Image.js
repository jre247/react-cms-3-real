import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(this.props.imageSize == 'small'){
      return (
        <img className="Content-small-image" src={this.props.value} alt="Image" />
      );
    }
    else if(this.props.imageSize == 'medium'){
      return (
        <img className="Content-medium-image" src={this.props.value} alt="Image" />
      );
    }
    else{
      return (
        <img className="Content-extra-large-image-percentage" src={this.props.value} alt="Image" />
      );
    }
  }
}

export default Image;
