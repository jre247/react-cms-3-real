import React from 'react';
import BasicTemplate from '../Templates/BasicTemplate/BasicTemplate';

class Venue extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 1;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    var propsData = {editLink: "/venue/edit", pageId: this.pageId, isEdit: false};
    return (
      <BasicTemplate {...propsData} />
    );
  }
}

export default Venue;
