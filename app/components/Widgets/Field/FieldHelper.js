import {_} from 'underscore';

class FieldHelper {
  constructor() {

  }

  static isShortDescription(node){
    return node.content_type_id == 4;
  }
  static isDescription(node){
    return node.content_type_id == 2;
  }
  static isImage(node){
    return node.content_type_id == 1;
  }
}

export default FieldHelper;
