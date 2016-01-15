import React from 'react';
import {Link} from 'react-router';
import PageStore from '../stores/PageStore';
import AuthLinks from './AuthLinks';
import {_} from 'underscore';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = PageStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    PageStore.listen(this.onChange);
  }

  componentWillUnmount() {
    PageStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {

  }

  render() {
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
          <Link key={index} className="Navigation-link" to={page.url}>{page.name}</Link>
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
