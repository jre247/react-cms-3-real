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
        <img className="Content-small-image widget image-width" src={this.props.value} alt="Image" style={this.props.styles} />
      );
    }
    else if(this.props.imageSize == 'medium'){
      return (
        <img className="Content-medium-image widget image-width" src={this.props.value} alt="Image" style={this.props.styles} />
      );
    }
    else{
      return (
        <img className="Content-extra-large-image-percentage widget image-width" src={this.props.value} style={this.props.styles} alt="Image" />
      );
    }
  }
}

export default Image;
