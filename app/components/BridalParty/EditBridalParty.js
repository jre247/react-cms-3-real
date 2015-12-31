import React from 'react';
import {_} from 'underscore';
import ListGridTemplate from '../Templates/ListGridTemplate/ListGridTemplate';

class EditBridalParty extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 7;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    var propsData = {isEdit: true, editLink: '/bridal-party/edit', pageId: this.pageId};

    return (
      <ListGridTemplate {...propsData} />
    );
  }
}

export default EditBridalParty;
