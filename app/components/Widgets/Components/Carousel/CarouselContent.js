import React from 'react';
import {Link} from 'react-router';
import PropsHelper from '../../../../helpers/PropsHelper'

class CarouselContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    $('.modal-content').removeClass('active');

    var propsArray = PropsHelper.convertPropsToArray(this.props.contentList);

    let images = propsArray.map((image, index) => {
      var className = index == this.props.selectedPhoto ? 'item active' : 'item';

      return (
        <div key={image.sort_order} className={className}>
          <div className="item-container">
            <img src={image.value} />
          </div>
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
