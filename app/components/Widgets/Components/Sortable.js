import React from 'react';
import {_} from 'underscore';
import ReactDOM from 'react-dom';
var self;

class Sortable extends React.Component {
  constructor(props) {
    super(props);
    self = this;
  }

  componentDidMount() {
    if(this.props.isSortingEnabled){
      self.setupSortableTable();
    }
  }

  componentWillUnmount() {

  }

  setupSortableTable(){
    // ReactDOM.findDOMNode(this) is the <ul>
    // element created in our render method
    $(ReactDOM.findDOMNode(this)).sortable({
      items: self.props.sortableItemElement,
      update: self.handleSortableUpdate
    });
  }

  handleSortableUpdate() {
    // update the list items through this new array.
    var newItems = _.clone(self.props.itemList, true);
    var $node = $(ReactDOM.findDOMNode(this));

    // toArray will return a sorted array of item ids:
    var ids = $node.sortable('toArray', { attribute: 'data-id' });

    ids.forEach((id, index) => {
      var item = _.findWhere(newItems, {id: parseInt(id)});
      item[self.props.itemPropertyToSortBy] = index;
    });

    // We'll cancel the sortable change and let React reorder the DOM instead:
    $node.sortable('cancel');

    newItems = _.sortBy(newItems, self.props.itemPropertyToSortBy);

    self.props.setStateForItemList(newItems);

    if(self.props.onSortingUpdateCallback)
      self.props.onSortingUpdateCallback();
  }


  render() {
    return(
      this.props.children
    );

  }
}

export default Sortable;
