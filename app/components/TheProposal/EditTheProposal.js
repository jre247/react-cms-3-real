import React from 'react';
import BasicTemplate from '../Templates/BasicTemplate/BasicTemplate';
import {_} from 'underscore';

class EditTheProposal extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 2;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    var propsData = _.extend({isEdit: true, editLink: '/our-story/edit', readOnlyPageLink: '/our-story',
      pageId: this.pageId}, this.props);

    return (
      <BasicTemplate {...propsData} />
    );
  }
}

export default EditTheProposal;
