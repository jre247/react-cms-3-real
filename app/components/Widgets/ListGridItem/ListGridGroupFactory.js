import {_} from 'underscore';

class ListGridGroupFactory {
  constructor(parentListItem) {
    this.parentListItem = parentListItem;
  }

  create(){
    var newGroup = {
      rows: [],
      parentListItem: this.parentListItem
    };

    return newGroup;
  }


}

export default ListGridGroupFactory;
