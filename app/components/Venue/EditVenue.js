import React from 'react';
import VenueStore from '../../stores/VenueStore';
import VenueActions from '../../actions/VenueActions';
import BasicTemplate from '../Templates/BasicTemplate';

class EditVenue extends React.Component {
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
  setStateForContentList(){
    this.setState({contentList: this.state.contentList})
  }
  handleSubmit(event) {
    event.preventDefault();

    //TheProposalActions.saveProposalData(this.state.contentList, this.props.history);
  }
  submit(event){
    VenueActions.saveVenueData(this.state.contentList, this.props.history);
  }
  render() {
    var propsData = {contentList: this.state.contentList, isEdit: true, submit: this.submit.bind(this),
      setStateForContentList: this.setStateForContentList.bind(this)};

    return (
      <BasicTemplate {...propsData} />
    );
  }
}

export default EditVenue;
