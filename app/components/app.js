import React from 'react';
import Footer from './Footer';
import Header from './Header';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import PageStore from '../stores/PageStore';
import PageActions from '../actions/PageActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = AuthStore.getState();
    this.pageState = PageStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    AuthStore.listen(this.onChange);
    PageStore.listen(this.onChange);
    AuthActions.getUserAuthenticationData();
    PageActions.getAllPages();
  }

  componentWillUnmount() {
    AuthStore.unlisten(this.onChange);
    PageStore.unlisten(this.onChange);
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
