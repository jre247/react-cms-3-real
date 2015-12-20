import React from 'react';

class ImageFactory {
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
      content_type_id: 1,
      sort_order: this.sortOrder
    };

    return content;
  }

}

export default ImageFactory;
