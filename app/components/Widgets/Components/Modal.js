import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-transition-group';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {


  }

  componentDidUpdate(){
    if(this.props.showModal){
      $('body').append('<div class="modal-backdrop fade in"></div>');
    }
    else{
      $('body .modal-backdrop').remove();
    }

  }

  componentWillUnmount() {

  }

  render() {
    if(this.props.showModal){
      return (
        <div className="modal-container">
          {this.props.children}
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
