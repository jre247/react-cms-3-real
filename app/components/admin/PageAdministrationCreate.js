import React from 'react';
import {_} from 'underscore';
import AuthHelper from '../../helpers/AuthHelper';
import PageAdministration from './PageAdministration';
var self;

class PageAdministrationCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    var propsData = _.extend({isEdit: false}, this.props);

    return(
      <PageAdministration {...propsData} />
    );
  }
}

export default PageAdministrationCreate;
