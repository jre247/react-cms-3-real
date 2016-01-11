import React from 'react';
import {Link} from 'react-router';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';
import {_} from 'underscore';
import API from '../../API';

class HowToGetThere extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 5;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }


  render() {
    var propsData = _.extend({isEdit: false, editLink: '/how-to-get-there/edit', readOnlyPageLink: '/how-to-get-there',
      pageId: this.pageId}, this.props);

    return (
      <ListTemplate {...propsData} />
    );
  }
}

export default HowToGetThere;
