import React from 'react';
import {_} from 'underscore';
import AuthHelper from '../../helpers/AuthHelper';
import PageStore from '../../stores/PageStore';
import PageActions from '../../actions/PageActions';

var self;

class PageAdministration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: {}};
  }

  componentDidMount() {
    self = this;

  }
  componentWillUnmount() {

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){

  }

  render() {
    if(!this.state.page){
      return(
        <span />
      );
    }
    else{
      return(
        <div className='Content-panel'>
          <div>
              <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" value={this.state.page.name} onChange={this.PageActions.onPageChange.bind(this)} />
              </div>

              <div className="form-group">
                  <label>Admin</label>
                  <input className="form-control" name="admin" type="checkbox" value={this.state.page.url} onChange={this.PageActions.onUrlChange.bind(this)} />
              </div>


              <button type="button" className="btn btn-warning btn-lg" onClick={this.submit.bind(this)}>Save</button>
          </div>
        </div>
      );
    }
  }
}

export default PageAdministration;
