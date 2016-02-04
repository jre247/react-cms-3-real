import React from 'react';
import ReactDOM from 'react-dom';

class Resizable extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if(this.props.isResizable){
      $(ReactDOM.findDOMNode(this)).resizable();
    }
  }

  componentWillUnmount() {

  }

  render() {
    if(this.props.isResizable){
      return (
        <div className="resizable-container">
            {this.props.children}
        </div>
      );
    }
    else{
      return (
        <div className="non-resizable-container">
          {this.props.children}
        </div>
      )
    }

  }
}

export default Resizable;
