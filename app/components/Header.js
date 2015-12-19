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
          <div>
            <Navigation className="Header-nav" history={this.props.history} />
          </div>
          <div className="Header-brand" >
            <span className="Header-brandTxt">JASON & JENNA</span>
          </div>

          <h2 >November 5th, 2016</h2>
          <h3 >Middletown, CT</h3>


        </div>
      </div>
    );
  }
}

export default Header;
