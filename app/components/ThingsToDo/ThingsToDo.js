import React from 'react';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';
import {_} from 'underscore';

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 2;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }


  render() {
    var propsData = _.extend({isEdit: false, editLink: '/things-to-do/edit', readOnlyPageLink: '/things-to-do',
      pageId: this.pageId}, this.props);

    return (
      <ListTemplate {...propsData} />
    );
  }
}

export default ThingsToDo;
