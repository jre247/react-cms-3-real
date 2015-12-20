import React from 'react';

class LongDescriptionFactory {
  constructor(sortOrder, name, description) {
    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
  }
  create() {

    var content =
    {
      name: this.name,
      description: this.description,
      value: '',
      content_type_id: 2,
      sort_order: this.sortOrder
    };

    return content;
  }

}

export default LongDescriptionFactory;
