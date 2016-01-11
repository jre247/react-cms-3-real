import React from 'react';
import {_} from 'underscore';
import ListGridTemplate from '../Templates/ListGridTemplate/ListGridTemplate';

class EditBridalParty extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 6;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    var propsData = _.extend({isEdit: true, editLink: '/bridal-party/edit', pageId: this.pageId,
      readOnlyPageLink: '/bridal-party'}, this.props);

    return (
      <ListGridTemplate {...propsData} />
    );
  }
}

export default EditBridalParty;
