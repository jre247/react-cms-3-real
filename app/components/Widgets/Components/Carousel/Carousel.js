import React from 'react';
import {Link} from 'react-router';
import CarouselIndicators from './CarouselIndicators';
import CarouselContent from './CarouselContent';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div id="largeCarousel" className="carousel" data-ride="carousel">
        <div className={!this.props.showIndicators ? 'hidden' : ''}>
          <CarouselIndicators {...this.props} />
        </div>
        <CarouselContent {...this.props} />

        <a className="left carousel-control" href="#largeCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#largeCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
