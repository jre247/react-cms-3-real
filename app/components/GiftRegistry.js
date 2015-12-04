import React from 'react';
import {Link} from 'react-router';


class GiftRegistry extends React.Component {
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
      <div>
        Gift Registry 
      </div>
    );
  }
}

export default GiftRegistry;
