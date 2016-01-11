import React from 'react';
import {_} from 'underscore';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';
import API from '../../API';

class EditHowToGetThere extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = 5;
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }


  render() {
    var propsData = _.extend({isEdit: true, editLink: '/how-to-get-there/edit', readOnlyPageLink: '/how-to-get-there',
      pageId: this.pageId}, this.props);

    return (
      <ListTemplate {...propsData} />
    );
  }
}

export default EditHowToGetThere;
