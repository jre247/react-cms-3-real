import React from 'react';
import Footer from './Footer';
import Header from './Header';

class App extends React.Component {
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
