import React from 'react';
import TheProposalStore from '../../stores/TheProposalStore';
import TheProposalActions from '../../actions/TheProposalActions';
import BasicTemplate from '../Templates/BasicTemplate';

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
  setStateForContentList(){
    this.setState({contentList: this.state.contentList})
  }

  handleSubmit(event) {
    event.preventDefault();

    //TheProposalActions.saveProposalData(this.state.contentList, this.props.history);
  }
  submit(event){
    TheProposalActions.saveProposalData(this.state.contentList, this.props.history);
  }

  render() {
    var propsData = {contentList: this.state.contentList, isEdit: true, submit: this.submit.bind(this),
      setStateForContentList: this.setStateForContentList.bind(this)};

    return (
      <BasicTemplate {...propsData} />
    );
  }
}

export default EditTheProposal;
