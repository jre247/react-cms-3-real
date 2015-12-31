import React from 'react';
import {Link} from 'react-router';
import ListGridTemplate from '../Templates/ListGridTemplate/ListGridTemplate';
import {_} from 'underscore';
import API from '../../API';

class BridalParty extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 7;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    var propsData = {isEdit: false, editLink: '/bridal-party/edit', pageId: this.pageId};

    return (
      <ListGridTemplate {...propsData} />
    );
  }
}

export default BridalParty;
