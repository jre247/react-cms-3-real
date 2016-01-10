import React from 'react';
import BasicTemplate from '../Templates/BasicTemplate/BasicTemplate';

class TheProposal extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 2;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    var propsData = {editLink: "/our-story/edit", pageId: this.pageId, isEdit: false};
    return (
      <BasicTemplate {...propsData} />
    );
  }
}

export default TheProposal;
