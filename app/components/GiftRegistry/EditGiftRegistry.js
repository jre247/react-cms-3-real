import React from 'react';
import {_} from 'underscore';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';

class EditGiftRegistry extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 5;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }


  render() {
    var propsData = _.extend({isEdit: true, editLink: '/gift-registry/edit', readOnlyPageLink: '/gift-registry',
      pageId: this.pageId}, this.props);

    return (
      <ListTemplate {...propsData} />
    );
  }
}

export default EditGiftRegistry;
