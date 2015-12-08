import React from 'react';
import {Link} from 'react-router';
import TheProposalStore from '../stores/TheProposalStore';
import TheProposalActions from '../actions/TheProposalActions';

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
    if(!this.state.proposal && !this.state.description){
      return (
        <div>
          <div className="Edit-Content-Button">
            <Link className="Navigation-link" to="/the-proposal/edit">Edit</Link>
          </div>

          <div className="Empty-Page-Content">
            <span>There is no content yet.</span>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="Detail">
          <div className="Edit-Content-Button">
            <Link className="Navigation-link" to="/the-proposal/edit">Edit</Link>
          </div>

          <img className="Content-large-image" src={this.state.proposal.url} alt="Proposal Image" />

          <div className="Content-long-description-container">
            <div className="Content-long-description">
                {this.state.proposal.description}
            </div>
          </div>

        </div>
      );
    }
  }
}

export default TheProposal;
