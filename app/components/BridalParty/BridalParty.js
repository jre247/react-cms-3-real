import React from 'react';
import {Link} from 'react-router';
import ListGridTemplate from '../Templates/ListGridTemplate/ListGridTemplate';
import {_} from 'underscore';
import API from '../../API';

class BridalParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contentList: []};
    this.pageId = 7;
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
    var propsData = {isEdit: false, contentList: this.state.contentList, editLink: '/bridal-party/edit'};
    return (
      <ListGridTemplate {...propsData} />
    );
  }
}

export default BridalParty;
