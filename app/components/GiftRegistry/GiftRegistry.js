import React from 'react';
import {Link} from 'react-router';
import GiftRegistryStore from '../../stores/GiftRegistryStore';
import GiftRegistryActions from '../../actions/GiftRegistryActions';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';
import {_} from 'underscore';

class GiftRegistry extends React.Component {
  constructor(props) {
    super(props);
    this.state = GiftRegistryStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    GiftRegistryStore.listen(this.onChange);
    GiftRegistryActions.getContentListData();
  }
  componentWillUnmount() {
    GiftRegistryStore.unlisten(this.onChange);
  }
  render() {
    var propsData = {isEdit: false, contentList: this.state.contentList, editLink: '/gift-registry/edit'};
    return (
      <ListTemplate {...propsData} />
    );
  }
}

export default GiftRegistry;
