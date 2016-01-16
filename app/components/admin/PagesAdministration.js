import React from 'react';
import {_} from 'underscore';
import AuthHelper from '../../helpers/AuthHelper';
import PageStore from '../../stores/PageStore';
import PageActions from '../../actions/PageActions';
import { createHistory } from 'history'

var self;

class PagesAdministration extends React.Component {

  constructor(props) {
    super(props);
    this.state = PageStore.getState();
    self = this;
  }

  componentDidMount() {
    PageStore.listen(this.onChange);
    PageActions.getAllPages();
  }
  componentWillUnmount() {
    PageStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  selectPage(page, event){
    self.props.history.pushState(null, '/admin/pages-administration/' + page.id);
  }

  render() {
    if(this.state.pages.length == 0){
      return(
        <span />
      );
    }
    else{
      let nodes = this.state.pages.map((page, index) => {
        return (
          <tr key={index} onClick={this.selectPage.bind(this, page)}>
            <td>{page.name}</td>
            <td>{page.template_name}</td>
            <td>{page.url}</td>
          </tr>
        );
      });

      return (
        <div className='Content-panel'>
          <div className="table-responsive">
            <table className="table pages-administration">
            <thead>
              <tr>
                <th>Name</th>
                <th>Template</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody className="pages-administration-table-body">
              {nodes}
            </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default PagesAdministration;
