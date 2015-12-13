import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(this.props.isOpen){
      return (
        <div>
          <div id="largeCarouselModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
               <div className="modal-content">
                 
               </div>
            </div>
          </div>
        </div>
      );

    }
    else{
      return (
        <div>
        </div>
      );
    }

  }
}

export default Modal;
