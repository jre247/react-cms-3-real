import React from 'react';
import {Link} from 'react-router';
import Navigation from './Navigation';

class Header extends React.Component {
  constructor(props) {
    super(props);
    //this.state = NavbarStore.getState();
    //this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
  //  NavbarStore.listen(this.onChange);
  //  NavbarActions.getCharacterCount();


  }

  componentWillUnmount() {
    //NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
  //  this.setState(state);
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
            <a className="Header-brand" href="/" >
              <span className="Header-brandTxt">JASON & JENNA</span>
            </a>

            <div className="Header-graphic-separator">
            </div>

            <div>
              <Navigation className="Header-nav" history={this.props.history} />
            </div>

            <div className="Header-graphic-separator">
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
