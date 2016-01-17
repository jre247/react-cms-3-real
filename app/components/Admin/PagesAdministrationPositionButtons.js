import React from 'react';
import {_} from 'underscore';
import ReactDOM from 'react-dom';
import API from '../../API';
var self;

class PagesAdministration extends React.Component {
  constructor(props) {
    super(props);
    self = this;
    self.state = {arePagesSortable: false};
  }

  componentDidMount() {

  }
  enablePageSorting(){
    debugger;
    self.setState({arePagesSortable: true});

    // ReactDOM.findDOMNode(this) is the <ul>
    // element created in our render method
    $(ReactDOM.findDOMNode(this)).sortable({
      items: 'tbody tr',
      update: this.props.handleSortableUpdate
    });
  }
  disablePageSorting(){
    debugger;
    self.setState({arePagesSortable: false});
    $(ReactDOM.findDOMNode(this)).sortable('disable');
  }
  savePageSorting(){
    debugger;
    API.SaveSortingForPages(this.props.pages).then(function(){

    });

    this.disablePageSorting();
  }

  render() {
    if(this.state.arePagesSortable){
      return (
        <div className="pages-administration-position-buttons">
          <button type="button" className="btn btn-warning btn-lg pull-right"
            onClick={this.savePageSorting.bind(this)}>Save Positions</button>
        </div>
      );
    }
    else{
      return (
        <div className="pages-administration-position-buttons">
          <button type="button" className="btn btn-warning btn-lg pull-right"
            onClick={this.enablePageSorting.bind(this)}>Change Positions</button>
        </div>
      );
    }

  }

}

export default PagesAdministration;
