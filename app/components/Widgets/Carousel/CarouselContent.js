import React from 'react';
import {Link} from 'react-router';
import PropsHelper from '../../../helpers/PropsHelper'

class CarouselContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    var propsArray = PropsHelper.convertPropsToArray(this.props.contentList);

    let images = propsArray.map((image, index) => {
      return (
        <div className={index == this.props.selectedPhoto ? 'item active' : 'item'}>
          <img key={index} src={image.value} />
        </div>
      );
    });

    return (
      <div className="carousel-inner" role="listbox">
        {images}
      </div>
    );
  }
}

export default CarouselContent;
