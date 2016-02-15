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
  //a node is a sub list item if it has its parent index property >= 0
  //however, javascript is silly and thinks "undefined >= 0" is a true statement
  static isSubListItem(node){
    return typeof node.parent_index == "number";
  }
  static isParentListItem(node){
    return typeof node.parent_index !== "number";
  }

  static isUrl(node){
    return node.content_type_id == 5;
  }
  static isIframe(node){
    return node.content_type_id == 6;
  }
  static isImageUpload(node){
    return node.content_type_id == 7;
  }
}

export default FieldHelper;
