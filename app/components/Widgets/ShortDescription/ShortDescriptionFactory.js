import React from 'react';

class ShortDescriptionFactory {
  constructor(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number || 1;
    this.column_number = column_number || 1;
  }
  create() {

    var content =
    {
      name: this.name,
      description: this.description,
      value: '',
      content_type_id: 4,
      sort_order: this.sortOrder,
      template_id: this.templateId,
      parent_index: this.parentIndex,
      row_number: this.row_number,
      column_number: this.column_number
    };

    return content;
  }

}

export default ShortDescriptionFactory;
