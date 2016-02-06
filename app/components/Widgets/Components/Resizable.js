import React from 'react';
import ReactDOM from 'react-dom';

class Resizable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var self = this;
    if(this.props.isResizable){
      $(ReactDOM.findDOMNode(self)).resizable({
        start: self.start.bind(self),
        resize: self.resize.bind(self)
      });
    }
  }

  componentWillUnmount() {

  }

  start(event, ui){

  }

  resize(event, ui){
    this.props.setNewWidth(ui.size.width, ui.originalSize.width, true);

    if(this.props.isRelativeResize){
      // setting null for height will force only the width of the image to change, which will make the
      // image resize relatively
      this.props.setNewHeight(null);
    }
    else{
      debugger;
      this.props.setNewHeight(ui.size.height, ui.originalSize.height, true);
    }
  }

  stop(event, ui){

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
