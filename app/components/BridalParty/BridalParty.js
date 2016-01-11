import React from 'react';
import {_} from 'underscore';
import ListGridTemplate from '../Templates/ListGridTemplate/ListGridTemplate';

class BridalParty extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 6;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    var propsData = _.extend({isEdit: false, editLink: '/bridal-party/edit', pageId: this.pageId}, this.props);

    return (
      <ListGridTemplate {...propsData} />
    );
  }
}

export default BridalParty;
