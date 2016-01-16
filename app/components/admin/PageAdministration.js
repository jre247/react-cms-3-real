import React from 'react';
import {_} from 'underscore';
import AuthHelper from '../../helpers/AuthHelper';
import PageStore from '../../stores/PageStore';
import PageActions from '../../actions/PageActions';
import LookupStore from '../../stores/LookupStore';

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
    this.getPage();
  }
  componentWillUnmount() {
    PageStore.unlisten(this.onChange);
    LookupStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  getPage(){
    debugger;
    var pages = this.state.pages;
    if(pages){
      var page = _.findWhere(pages, {id: this.props.params.id});
      if(page){
        self.setState({page: page});
      }
    }
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){

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
    this.state.page.template = event.target.value;
    this.setState({page: this.state.page});
  }

  render() {
    if(!this.state.page){
      return(
        <span />
      );
    }
    else{
      var templates = this.state.templates.map((template, index) => {
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
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" value={this.state.page.name} onChange={this.onPageChange.bind(this)} />
              </div>

              <div className="form-group">
                  <label>Admin</label>
                  <input type="text" className="form-control" name="admin" value={this.state.page.url} onChange={this.onUrlChange.bind(this)} />
              </div>

              <div className="form-group">
                  <label>Templates</label>
                  <select onChange={this.onTemplateChange.bind(this)}>
                    {templates}
                  </select>
              </div>

              <button type="button" className="btn btn-warning btn-lg" onClick={this.submit.bind(this)}>Save</button>
          </div>
        </div>
      );
    }
  }
}

export default PageAdministration;
