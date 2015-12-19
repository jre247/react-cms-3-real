import React from 'react';
import TheProposalStore from '../../stores/TheProposalStore';
import TheProposalActions from '../../actions/TheProposalActions';

class EditTheProposal extends React.Component {
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
  handleSubmit(event) {
    event.preventDefault();

    var contents = [
      {
        name: 'Proposal Image Url',
        description: 'Proposal Image Url',
        value: this.state.proposal.url,
        content_type_id: 1,
        sort_order: 1
      },
      {
        name: 'Proposal Description',
        description: 'Proposal Description',
        value: this.state.proposal.description,
        content_type_id: 2,
        sort_order: 2
      }
    ];

    TheProposalActions.saveProposalData(contents, this.props.history);
  }
  render() {
    return (
      <div className="Detail">
          <h1 className="Heading Heading--alt">Edit Proposal</h1>
          <div className="Content padBox">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-8'>
                    <div className="form-group">
                      <input ref="url" className='form-control' name="url" placeholder="Url" value={this.state.proposal.url}
                        onChange={TheProposalActions.updateUrl} autoFocus/>
                    </div>
                    <div className="form-group">
                      <textarea ref="description" className='form-control' name="description" placeholder="Description"
                        value={this.state.proposal.description} onChange={TheProposalActions.updateDescription}></textarea>
                    </div>
                    <div className="form-group">
                      <button type='submit' className='btn btn-primary'>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default EditTheProposal;
