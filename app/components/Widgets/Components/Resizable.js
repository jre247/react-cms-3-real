import React from 'react';
import ReactDOM from 'react-dom';

class Resizable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.isEdit){
      React.Children.forEach(this.props.children, (child) => {
        debugger;
        var ref = React.findDOMNode(this.ref);

      });
      debugger;
      var resizableElement = this.props.children.ref;

      $(ReactDOM.findDOMNode(resizableElement)).resizable({
        start: self.startResizing,
        stop: self.stopResizing
      });
    }
  }

  componentWillUnmount() {

  }

  startResizing(event, ui){
    debugger;
  }

  stopResizing(event, ui){
    debugger;
  }

  render() {
    return (
      <div className="resizable-container">
        {this.props.children}
      </div>
    );
  }
}

export default Resizable;
