import React from 'react';
import {_} from 'underscore';
import AuthHelper from '../../helpers/AuthHelper';
import PageAdministration from './PageAdministration';
var self;

class PageAdministrationEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var propsData = _.extend({isEdit: true}, this.props);

    return(
      <PageAdministration {...propsData} />
    );
  }
}

export default PageAdministrationEdit;
