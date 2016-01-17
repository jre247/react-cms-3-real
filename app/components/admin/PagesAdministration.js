import React from 'react';
import {_} from 'underscore';
import AuthHelper from '../../helpers/AuthHelper';
import PageStore from '../../stores/PageStore';
import PageActions from '../../actions/PageActions';
import { createHistory } from 'history'
import ReactDOM from 'react-dom';
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
    // We should only use setState to mutate our component's state,
    // so here we'll clone the items array (using lodash) and
    // update the list items through this new array.
    var newItems = _.clone(self.state.pages, true);
    var $node = $(ReactDOM.findDOMNode(this));

    // Here's where our data-id attribute from before comes
    // into play. toArray will return a sorted array of item ids:
    var ids = $node.sortable('toArray', { attribute: 'data-id' });

    // Now we can loop through the array of ids, find the
    // item in our array by its id (again, w/ lodash),
    // and update its position:
    ids.forEach((id, index) => {
      var pageId = parseInt(id);

      var item = _.findWhere(newItems, {id: pageId});
      item.sort_order = index;
    });

    // We'll cancel the sortable change and let React reorder the DOM instead:
    $node.sortable('cancel');

    newItems = _.sortBy(newItems, 'sort_order');

    // After making our updates, we'll set our items
    // array to our updated array, causing items with
    // a new position to be updated in the DOM:
    self.setState({ pages: newItems });
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

      return (
        <div className='Content-panel'>
          <div className="page-create-button">
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
              <tbody className="auth-table-body">
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
