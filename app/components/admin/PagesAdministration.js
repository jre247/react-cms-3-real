import React from 'react';
import {_} from 'underscore';
import AuthHelper from '../../helpers/AuthHelper';
import PageStore from '../../stores/PageStore';
import PageActions from '../../actions/PageActions';
import { createHistory } from 'history'
import ReactDOM from 'react-dom';
import API from '../../API';
import Sortable from '../Widgets/Components/Sortable';
var self;

class PagesAdministration extends React.Component {
  constructor(props) {
    super(props);
    this.state = PageStore.getState();
    this.onChange = this.onChange.bind(this);
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
    self.setState(state);
  }

  onSortingUpdate(){
    API.saveSortingForPages(self.state.pages);
  }
  selectPage(page, event){
    self.props.history.pushState(null, '/admin/pages/' + page.id + '/edit');
  }
  create(){
    self.props.history.pushState(null, '/admin/pages/create');
  }
  setStateForPages(newPages){
    self.setState({pages: newPages});
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
          <tr key={index} data-id={page.id} onClick={this.selectPage.bind(this, page)}>
            <td>{page.name}</td>
            <td>{page.template_name}</td>
            <td>{page.url}</td>
          </tr>
        );
      });

      var sortableProps = _.extend({sortableItemElement: 'tr', itemList: self.state.pages,
        itemPropertyToSortBy: 'sort_order', setStateForItemList: self.setStateForPages.bind(this),
        onSortingUpdateCallback: self.onSortingUpdate.bind(this)},
        this.props);

      return (
        <div className='Content-panel'>
          <div className="pages-administration-buttons">
            <button type="button" className="btn btn-primary btn-lg"
              onClick={this.create.bind(this)}>Create</button>
          </div>
          <div>
            <div className="table-responsive">
              <table className="table pages-administration">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Template</th>
                    <th>Url</th>
                  </tr>
                </thead>
                <Sortable {...sortableProps}>
                  <tbody className="table-body">
                      {nodes}
                  </tbody>
                </Sortable>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PagesAdministration;
