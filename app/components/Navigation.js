import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';
import AuthLinks from './AuthLinks';
import {_} from 'underscore';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.getAllPages();
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {

  }

  render() {
    debugger;
    if(_.isEmpty(this.state.pages)){
      return (
        <div className='Navigation' role="navigation">
            <Link className="Navigation-link" to="/">Home</Link>

            <AuthLinks />
        </div>
      );
    }
    else{
      let nodes = this.state.pages.map((page, index) => {
        return (
          <Link key={index} className="Navigation-link" to={"/page/" + page.url}>{page.name}</Link>
        );
      });

      return (
        <div className='Navigation' role="navigation">
            <Link className="Navigation-link" to="/">Home</Link>

            {nodes}

            <AuthLinks />
        </div>
      );
    }

  }
}

export default Navbar;
