import React from 'react';
import {_} from 'underscore';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';

class GiftRegistry extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 4;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }


  render() {
    var propsData = _.extend({isEdit: false, editLink: '/gift-registry/edit', readOnlyPageLink: '/gift-registry',
      pageId: this.pageId}, this.props);

    return (
      <ListTemplate {...propsData} />
    );
  }
}

export default GiftRegistry;
