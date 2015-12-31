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

  static setSortOrderAndRowAndColumnForContentGroups(groups){
    var sortOrder = 0;

    for(var groupIndex = 0; groupIndex < groups.length; groupIndex++){
      var group = groups[groupIndex];
      var parentListItem = group.parentListItem;
      parentListItem.sort_order = sortOrder;
      sortOrder++;

      for(var rowIndex = 0; rowIndex < group.rows.length; rowIndex++){
        var row = group.rows[rowIndex];

        for(var columnIndex = 0; columnIndex < row.columns.length; columnIndex++){
          var column = row.columns[columnIndex];

          for(var contentIndex = 0; contentIndex < column.contentList.length; contentIndex++){
            var contentItem = column.contentList[contentIndex];
            contentItem.row_number = rowIndex;
            contentItem.column_number = columnIndex;
            contentItem.sort_order = sortOrder;

            sortOrder++;
          }
        }
      }
    }
  }
}

export default TemplateHelper;
