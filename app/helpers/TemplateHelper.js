import {_} from 'underscore';

class TemplateHelper {
  constructor() {

  }

  static setNewSortOrderForAllListItems(contentList){
    for(var i = 0; i < contentList.length; i++){
      var item = contentList[i];
      item.sort_order = i + 1;
    }
  }
}

export default TemplateHelper;
