import {_} from 'underscore';

class FieldHelper {
  constructor() {

  }

  static isDescription(node){
    return node.content_type_id == 2;
  }
}

export default FieldHelper;
