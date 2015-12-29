import React from 'react';
import {Link} from 'react-router';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';
import {_} from 'underscore';
import API from '../../API';

class HowToGetThere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contentList: []};
    this.pageId = 6;
  }

  componentDidMount() {
    var self = this;
    API.getContentListForPage(this.pageId).then(function(contentList){
      self.setState({contentList: contentList});
    });
  }
  componentWillUnmount() {

  }
  render() {
    var propsData = {isEdit: false, contentList: this.state.contentList, editLink: '/how-to-get-there/edit'};
    return (
      <ListTemplate {...propsData} />
    );
  }
}

export default HowToGetThere;
