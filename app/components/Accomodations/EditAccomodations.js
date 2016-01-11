import React from 'react';
import {Link} from 'react-router';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';
import {_} from 'underscore';
import API from '../../API';


class EditAccomodations extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 7;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }


  render() {
    var propsData = _.extend({isEdit: true, editLink: '/accomodations/edit', readOnlyPageLink: '/accomodations',
      pageId: this.pageId}, this.props);

    return (
      <ListTemplate {...propsData} />
    );
  }
}

export default EditAccomodations;
