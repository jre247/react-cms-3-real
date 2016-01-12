import React from 'react';
import TemplateRenderer from '../Templates/TemplateRenderer';
import {_} from 'underscore';
import API from '../../API';
var self;

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.pageId;
    this.isEdit = false;
    this.state = {pageId: null, templateId: null;
    self = this;
  }

  componentDidMount() {
    API.getPageByUrl(this.props.params.name, this.isEdit).then(function(viewmodel){
      self.setState({pageId: viewmodel.page.id, templateId: viewmodel.page.template_id});
    });
  }

  render() {
    if(!_.isEmpty(this.state.page)){
      var propsData = _.extend({isEdit: this.isEdit, editLink: 'page/' + this.state.page.url + '/edit',
        pageId: this.state.pageId, templateId: this.state.templateId}, this.props);

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

export default Page;
