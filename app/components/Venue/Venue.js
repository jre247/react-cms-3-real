import React from 'react';
import {Link} from 'react-router';
import VenueStore from '../../stores/VenueStore';
import VenueActions from '../../actions/VenueActions';
import {_} from 'underscore';
import BasicTemplate from '../Templates/BasicTemplate/BasicTemplate';

class Venue extends React.Component {
  constructor(props) {
    super(props);
    this.state = VenueStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    VenueStore.listen(this.onChange);
    VenueActions.getVenueData();
  }
  componentWillUnmount() {
    VenueStore.unlisten(this.onChange);
  }
  render() {
    var propsData = {editLink: "/venue/edit", contentList: this.state.contentList, isEdit: false};
    return (
      <BasicTemplate {...propsData} />
    );
  }
}

export default Venue;
