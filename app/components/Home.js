import React from 'react';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  //this method will only get called when the first page route is loaded. Subsequent page route changes will
  //fire componentWillReceiveProps
  componentDidMount() {
    NavbarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="Home-content">
          <h3>Middletown, CT</h3>
      </div>
    );
  }
}

export default Home;
