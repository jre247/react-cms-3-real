import React from 'react';
import {_} from 'underscore';
import AuthHelper from '../../helpers/AuthHelper';
import PageStore from '../../stores/PageStore';
import PageActions from '../../actions/PageActions';
import LookupStore from '../../stores/LookupStore';
import API from '../../API';

var self;

class PageAdministration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: {}};
    this.pageState = PageStore.getState();
    this.lookupState = LookupStore.getState();
    this.onChange = this.onChange.bind(this);
    self = this;
  }

  componentDidMount() {
    PageStore.listen(this.onChange);
    LookupStore.listen(this.onChange);
  
    var isEdit = this.props.isEdit;

    if(isEdit)
      this.getPage();
    else
      this.createPage();
  }
  componentWillUnmount() {
    PageStore.unlisten(this.onChange);
    LookupStore.unlisten(this.onChange);
  }
  onChange(state) {
    self.setState(state);
  }
  createPage(){
    var sortOrder = this.pageState.pages.length;
    var newPage = {id: 0, name: '', url: '', template_id: 1, sort_order: sortOrder};
    self.setState({page: newPage});
  }
  getPage(){
    var pages = this.pageState.pages;
    if(pages){
      var page = _.findWhere(pages, {id: parseInt(this.props.params.id)});
      if(page){
        self.setState({page: page});
      }
    }
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    API.savePage(this.state.page).then(function(){
      self.props.history.pushState(null, '/admin/pages');
    })
  }

  onNameChange(event){
    this.state.page.name = event.target.value;
    this.setState({page: this.state.page});
  }

  onUrlChange(event){
    this.state.page.url = event.target.value;
    this.setState({page: this.state.page});
  }

  onTemplateChange(event){
    this.state.page.template_id = event.target.value;
    this.setState({page: this.state.page});
  }

  render() {
    var templates = this.lookupState.lookups.templates.map((template, index) => {
      return (
        <option key={index} value={template.id}>
          {template.name}
        </option>
      );
    });

    return(
      <div className='Content-panel'>
        <div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="email" value={this.state.page.name} onChange={this.onNameChange.bind(this)} />
            </div>

            <div className="form-group">
                <label>Url</label>
                <input type="text" className="form-control" name="admin" value={this.state.page.url} onChange={this.onUrlChange.bind(this)} />
            </div>

            <div className="form-group">
                <label>Templates</label>
                <select className="form-control" onChange={this.onTemplateChange.bind(this)}
                  value={this.state.page.template_id}>
                    {templates}
                </select>
            </div>

            <button type="button" className="btn btn-warning btn-lg" onClick={this.submit.bind(this)}>Save</button>
        </div>
      </div>
    );

  }
}

export default PageAdministration;
