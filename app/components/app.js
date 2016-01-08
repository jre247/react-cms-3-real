import React from 'react';
import Footer from './Footer';
import Header from './Header';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = AuthStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    AuthStore.listen(this.onChange);
    AuthActions.getUserAuthenticationData();
  }

  componentWillUnmount() {
    AuthStore.unlisten(this.onChange);
  }


  render() {
    return (
      <div className="App-container">
        <Header />
        {this.props.children}
        <Footer />
        <div className="Backdrop">
          <div className="fixed-container">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
