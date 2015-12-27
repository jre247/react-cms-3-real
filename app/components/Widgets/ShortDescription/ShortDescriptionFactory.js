import React from 'react';

class ShortDescriptionFactory {
  constructor(sortOrder, name, description, templateId, parentIndex) {
    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
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
      parent_index: this.parentIndex
    };

    return content;
  }

}

export default ShortDescriptionFactory;
