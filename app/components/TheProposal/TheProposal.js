import React from 'react';
import {Link} from 'react-router';
import TheProposalStore from '../../stores/TheProposalStore';
import TheProposalActions from '../../actions/TheProposalActions';
import LongDescription from '../Widgets/LongDescription/LongDescription';
import EmptyContent from '../EmptyContent';
import {_} from 'underscore';

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
    if(_.isEmpty(this.state.proposal)){
      var emptyContentProps = {editLink: '/our-story/edit'}
      return (
        <EmptyContent {...emptyContentProps} />
      );
    }
    else {
      var longDescriptionProps = { isEdit: false, value: this.state.proposal.description};

      return (
        <div className='Content-panel'>
          <div className="Content-container">
            <div className="Edit-Content-Button">
              <Link className="Navigation-link" to="/our-story/edit">Edit</Link>
            </div>

            <div className="Content-image-container">
              <img className="Content-extra-large-image-percentage" src={this.state.proposal.url} alt="Proposal Image" />
            </div>

            <LongDescription {...longDescriptionProps} />
          </div>
        </div>
      );
    }
  }
}

export default TheProposal;
