import React from 'react';
import TheProposalStore from '../../stores/TheProposalStore';
import TheProposalActions from '../../actions/TheProposalActions';
import LongDescription from '../Widgets/LongDescription/LongDescription';
import ImageWidget from '../Widgets/Image/ImageWidget';
import LongDescriptionFactory from '../Widgets/LongDescription/LongDescriptionFactory';
import ImageFactory from '../Widgets/Image/ImageFactory';
import FieldHelper from '../Field/FieldHelper';

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
  //todo: move to actions
  createLongDescription(event){
    var sortOrder = this.state.contentList.length + 1;

    var longDescriptionFactory = new LongDescriptionFactory(sortOrder, 'Our Story Description',
      'Our Story Description');
    var longDescription = longDescriptionFactory.create();

    this.state.contentList.push(longDescription);
    this.setState({contentList: this.state.contentList});
  }
  //todo: move to actions
  createImage(event){
    var sortOrder = this.state.contentList.length + 1;

    var imageFactory = new ImageFactory(sortOrder, 'Our Story Image',
      'Our Story Image');
    var image = imageFactory.create();

    this.state.contentList.push(image);
    this.setState({contentList: this.state.contentList});
  }
  handleSubmit(event) {
    event.preventDefault();

    //TheProposalActions.saveProposalData(this.state.contentList, this.props.history);
  }
  submit(event){
    TheProposalActions.saveProposalData(this.state.contentList, this.props.history);
  }
  updateContent(index, event) {
    this.state.contentList[index].value = event.target.value;
    this.setState({contentList: this.state.contentList});
  }
  removeContent(index, event){
    this.state.contentList.splice(index, 1);
    this.setState({contentList: this.state.contentList});
  }
  render() {
    let theProposalNodes = this.state.contentList.map((contentItem, index) => {
        if(FieldHelper.isDescription(contentItem)){
          var longDescriptionProps = {value: contentItem.value, isEdit: true,
            onChange: this.updateContent.bind(this, index),
            onRemove: this.removeContent.bind(this, index)};
          return (
            <div key={contentItem.sort_order} className="form-group">
              <LongDescription {...longDescriptionProps} />
            </div>
          );
        }
        else{
          var imageProps = {value: contentItem.value, isEdit: true,
            onChange: this.updateContent.bind(this, index),
            onRemove: this.removeContent.bind(this, index)};
          return (
            <div key={contentItem.sort_order} className="form-group">
              <ImageWidget {...imageProps} />
            </div>
          );
        }
    });

    return (
      <div className='Content-panel'>
        <div className="Content-container">
          <div className='row'>
            <div className='col-sm-3'>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.createLongDescription.bind(this)}>
                  Create Long Description
                </button>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.createImage.bind(this)}>
                  Create Image
                </button>
              </div>
            </div>
          </div>

          {theProposalNodes}

          <div className={this.state.contentList.length > 0 ? 'form-group' : 'form-group hidden'}>
            <button type='submit' onClick={this.submit.bind(this)} className='btn btn-primary'>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTheProposal;
