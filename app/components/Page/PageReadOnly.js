import React from 'react';
import TemplateRenderer from '../Templates/TemplateRenderer';
import {_} from 'underscore';
import API from '../../API';
import NavbarStore from '../../stores/NavbarStore';
import NavbarActions from '../../actions/NavbarActions';
var self;

class PageReadOnly extends React.Component {
  constructor(props) {
    super(props);
    this.pageId;
    this.isEdit = false;
    this.pages = [];
    this.state = {page: {}, pageRetrieved: false};
    this.navState = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
    this.isHomePage = false;
    self = this;
  }

  //this method will only get called when the first page route is loaded. Subsequent page route changes will
  //fire componentWillReceiveProps
  componentDidMount() {
    NavbarStore.listen(this.onChange);
    this.getPage();
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
    this.pages = state.pages;
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
    var urlPageSplit = window.location.pathname.split('/page/');

    var isHomePage = urlPageSplit.length == 1;
    if(isHomePage){
      this.isHomePage = true;
    }
    else{
      this.isHomePage = false;

      var pageUrl = urlPageSplit[1];

      var page = _.findWhere(this.state.pages, {url: pageUrl});
      if(page){
        self.setState({page: page, pages: this.state.pages});
      }
    }

  }
  render() {
    if (this.isHomePage){
      return (
        <div className="Home-content">
            <h3>Middletown, CT</h3>
        </div>
      );
    }
    else if(!_.isEmpty(this.state.pages) && !_.isEmpty(this.state.page)){
      var propsData = _.extend({isEdit: this.isEdit, editLink: '/page/' + this.state.page.url + '/edit',
        pageId: this.state.page.id, templateId: this.state.page.template_id}, this.props);

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

export default PageReadOnly;
