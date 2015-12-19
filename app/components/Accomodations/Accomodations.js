import React from 'react';
import {Link} from 'react-router';
import EmptyContent from '../EmptyContent';


class Accomodations extends React.Component {
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
    var emptyContentProps = {editLink: '/accomodations/edit'}
    return (
      <EmptyContent {...emptyContentProps} />
    );
  }
}

export default Accomodations;
