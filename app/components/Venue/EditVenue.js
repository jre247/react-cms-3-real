import React from 'react';
import BasicTemplate from '../Templates/BasicTemplate/BasicTemplate';
import {_} from 'underscore';

class EditVenue extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 1;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    var propsData = _.extend({isEdit: true, editLink: '/venue/edit', readOnlyPageLink: '/venue',
      pageId: this.pageId}, this.props);

    return (
      <BasicTemplate {...propsData} />
    );
  }
}

export default EditVenue;
