import React from 'react';
import TemplateRenderer from '../Templates/TemplateRenderer';
import {_} from 'underscore';
import API from '../../API';
var self;

class PageEdit extends React.Component {
  constructor(props) {
    super(props);
    this.pageId;
    this.isEdit = true;
    this.state = {pageId: null, templateId: null};
    self = this;
  }

  //this method will only get called when the first page route is loaded. Subsequent page route changes will
  //fire componentWillReceiveProps
  componentDidMount() {
    this.getPage();
  }

  //need to get page in this method since componentDidMount does not get called when
  //changing routes to another page
  componentWillReceiveProps(){
    this.getPage();
  }

  getPage(){
    //note that this.props.params.name does not update like it should when changing routes
    var url = window.location.pathname;
    var pageUrlWithEdit = window.location.pathname.split('/page/')[1];
    var pageUrl = pageUrlWithEdit.split('/edit')[0];
    debugger;
    self.setState({pageRetrieved: false});
    API.getPageByUrl(pageUrl, this.isEdit).then(function(viewmodel){
      self.setState({page: viewmodel.page});
      self.setState({pageRetrieved: true});
    });
  }
  render() {
    if(this.state.pageRetrieved && !_.isEmpty(this.state.page)){
      debugger;
      var propsData = _.extend({isEdit: this.isEdit, editLink: '/page/' + this.state.page.url + '/edit',
        pageId: this.state.page.id, templateId: this.state.page.template_id,
        readOnlyPageLink: '/page/' + this.state.page.url}, this.props);

      return (
        <TemplateRenderer {...propsData} />
      );
    }
    else{
      return (
        <span />
      );
    }
  }
}

export default PageEdit;
