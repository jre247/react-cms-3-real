import React from 'react';
import {Link} from 'react-router';
import TheProposalStore from '../stores/TheProposalStore';
import TheProposalActions from '../actions/TheProposalActions';
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
      return (
        <div className='Content-panel'>
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
        <div className='Content-panel'>
          <div className="Content-container">
            <div className="Edit-Content-Button">
              <Link className="Navigation-link" to="/the-proposal/edit">Edit</Link>
            </div>

            <div className="Content-image-container">
              <img className="Content-extra-large-image-percentage" src={this.state.proposal.url} alt="Proposal Image" />
            </div>

            <div className="Content-long-description-container">
              <div className="Content-long-description">
                  {this.state.proposal.description}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default TheProposal;
