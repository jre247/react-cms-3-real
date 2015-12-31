import {_} from 'underscore';

class ListGridGroupFactory {
  constructor(parentListItem) {
    this.parentListItem = parentListItem;
  }

  static create(node){
    var newGroup = {
      rows: [],
      parentListItem: parentListItem
    };

    return newGroup;
  }


}

export default ListGridGroupFactory;
