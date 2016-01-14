import {_} from 'underscore';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class PageHelper {
  constructor() {
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
  }

  componentWillReceiveProps(){
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  getPageByUrl(pageUrl){
    if(!this.state || this.state.pages)
      return;

    var page = _.findWhere(this.state.pages, {url: pageUrl});
    return page;
  }
}

export default PageHelper;
