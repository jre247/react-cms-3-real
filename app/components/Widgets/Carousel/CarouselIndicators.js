import React from 'react';
import {Link} from 'react-router';
import PropsHelper from '../../../helpers/PropsHelper'

class CarouselIndicators extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    var propsArray = PropsHelper.convertPropsToArray(this.props.contentList);

    let indicators = propsArray.map((indicator, index) => {
      return (
        <li key={index} data-target="#largeCarousel" className={index == this.props.selectedPhoto ? 'active' : ''} data-slide-to={index}></li>
      );
    });

    return (
      <ol className="carousel-indicators">
        {indicators}
      </ol>
    );
  }
}

export default CarouselIndicators;
