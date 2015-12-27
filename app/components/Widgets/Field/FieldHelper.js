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
  static isTitle(node){
    return node.content_type_id == 3;
  }
  static isSubListItem(node){
    return node.parent_index > 0;
  }
  static isUrl(node){
    return node.content_type_id == 5;
  }
}

export default FieldHelper;
