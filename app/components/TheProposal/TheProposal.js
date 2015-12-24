import React from 'react';
import {Link} from 'react-router';
import TheProposalStore from '../../stores/TheProposalStore';
import TheProposalActions from '../../actions/TheProposalActions';
import {_} from 'underscore';
import BasicTemplate from '../Templates/BasicTemplate';

class TheProposal extends React.Component {
  constructor(props) {
    super(props);
    this.state = TheProposalStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    TheProposalStore.listen(this.onChange);
    TheProposalActions.getProposalData();
  }
  componentWillUnmount() {
    TheProposalStore.unlisten(this.onChange);
  }
  render() {
    var propsData = {editLink: "/our-story/edit", contentList: this.state.contentList, isEdit: false};
    return (
      <BasicTemplate {...propsData} />
    );
  }
}

export default TheProposal;
