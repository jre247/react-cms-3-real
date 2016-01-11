import React from 'react';
import {_} from 'underscore';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';

class EditThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 2;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }


  render() {
    var propsData = _.extend({isEdit: true, editLink: '/things-to-do/edit', readOnlyPageLink: '/things-to-do',
      pageId: this.pageId}, this.props);

    return (
      <ListTemplate {...propsData} />
    );
  }
}

export default EditThingsToDo;
