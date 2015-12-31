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

  static setNewSortOrderForGridRowsAndColumns(groups){
    for(var groupIndex = 0; groupIndex < groups.length; groupIndex++){
      var group = groups[groupIndex];

      for(var rowIndex = 0; rowIndex < group.rows.length; rowIndex++){
        var row = group.rows[rowIndex];

        for(var columnIndex = 0; columnIndex < row.columns.length; columnIndex++){
          var column = row.columns[columnIndex];

          for(var contentIndex = 0; contentIndex < column.contentList.length; contentIndex++){
            var contentItem = column.contentList[contentIndex];
            contentItem.row_number = rowIndex;
            contentItem.column_number = columnIndex;
          }
        }
      }
    }
  }
}

export default TemplateHelper;
