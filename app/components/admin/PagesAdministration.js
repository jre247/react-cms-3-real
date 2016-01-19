import React from 'react';
import {_} from 'underscore';
import AuthHelper from '../../helpers/AuthHelper';
import PageStore from '../../stores/PageStore';
import PageActions from '../../actions/PageActions';
import { createHistory } from 'history'
import ReactDOM from 'react-dom';
import API from '../../API';
import PagesAdministrationPositionButtons from './PagesAdministrationPositionButtons';
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

    this.setupSortableTable();
  }

  setupSortableTable(){
    // ReactDOM.findDOMNode(this) is the <ul>
    // element created in our render method
    $(ReactDOM.findDOMNode(this)).sortable({
      items: 'tbody tr',
      update: this.handleSortableUpdate
    });
  }
  componentWillUnmount() {
    PageStore.unlisten(this.onChange);
  }
  onChange(state) {
    self.setState(state);
  }
  handleSortableUpdate() {
    // update the list items through this new array.
    var newItems = _.clone(self.state.pages, true);
    var $node = $(ReactDOM.findDOMNode(this));

    // toArray will return a sorted array of item ids:
    var ids = $node.sortable('toArray', { attribute: 'data-id' });

    ids.forEach((id, index) => {
      var pageId = parseInt(id);

      var item = _.findWhere(newItems, {id: pageId});
      item.sort_order = index;
    });

    // We'll cancel the sortable change and let React reorder the DOM instead:
    $node.sortable('cancel');

    newItems = _.sortBy(newItems, 'sort_order');

    self.setState({ pages: newItems });

    API.saveSortingForPages(self.state.pages);
  }
  selectPage(page, event){
    self.props.history.pushState(null, '/admin/pages/' + page.id + '/edit');
  }
  create(){
    self.props.history.pushState(null, '/admin/pages/create');
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

      var positionButtonsProps = _.extend({pages: self.state.pages, handleSortableUpdate: this.handleSortableUpdate},
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
              <tbody className="table-body">
                {nodes}
              </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PagesAdministration;
