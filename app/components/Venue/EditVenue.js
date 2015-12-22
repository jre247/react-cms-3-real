import React from 'react';
import VenueStore from '../../stores/VenueStore';
import VenueActions from '../../actions/VenueActions';
import ImageFactory from '../Widgets/Image/ImageFactory';
import TitleFactory from '../Widgets/Title/TitleFactory';
import ShortDescriptionFactory from '../Widgets/ShortDescription/ShortDescriptionFactory';
import FieldHelper from '../Field/FieldHelper';
import ShortDescription from '../Widgets/ShortDescription/ShortDescription';
import ImageWidget from '../Widgets/Image/ImageWidget';
import Title from '../Widgets/Title/Title';

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
  createShortDescription(event){
    var sortOrder = this.state.contentList.length + 1;

    var shortDescriptionFactory = new ShortDescriptionFactory(sortOrder, 'The Wedding Description',
      'The Wedding Description');
    var shortDescription = shortDescriptionFactory.create();

    this.state.contentList.push(shortDescription);
    this.setState({contentList: this.state.contentList});
  }
  //todo: move to actions
  createImage(event){
    var sortOrder = this.state.contentList.length + 1;

    var imageFactory = new ImageFactory(sortOrder, 'The Wedding Image',
      'The Wedding Image');
    var image = imageFactory.create();

    this.state.contentList.push(image);
    this.setState({contentList: this.state.contentList});
  }
  createTitle(event){
    var sortOrder = this.state.contentList.length + 1;

    var factory = new TitleFactory(sortOrder, 'The Wedding Title',
      'The Wedding Title');
    var title = factory.create();

    this.state.contentList.push(title);
    this.setState({contentList: this.state.contentList});
  }
  handleSubmit(event) {
    event.preventDefault();

    //TheProposalActions.saveProposalData(this.state.contentList, this.props.history);
  }
  submit(event){
    VenueActions.saveVenueData(this.state.contentList, this.props.history);
  }
  //TODO: put in helper to reuse across all pages
  updateContent(index, event) {
    this.state.contentList[index].value = event.target.value;
    this.setState({contentList: this.state.contentList});
  }
  //TODO: put in helper to reuse across all pages
  removeContent(index, event){
    this.state.contentList.splice(index, 1);
    this.setState({contentList: this.state.contentList});
  }
  render() {
    let nodes = this.state.contentList.map((contentItem, index) => {
        var propsData = {value: contentItem.value, isEdit: true,
          onChange: this.updateContent.bind(this, index),
          onRemove: this.removeContent.bind(this, index)};

        if(FieldHelper.isShortDescription(contentItem)){
          return (
            <div key={contentItem.sort_order} className="form-group">
              <ShortDescription {...propsData} />
            </div>
          );
        }
        else if(FieldHelper.isImage(contentItem)){
          return (
            <div key={contentItem.sort_order} className="form-group">
              <ImageWidget {...propsData} />
            </div>
          );
        }
        else {
          return (
            <div key={contentItem.sort_order} className="form-group">
              <Title {...propsData} />
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
                <button className="btn btn-primary" onClick={this.createShortDescription.bind(this)}>
                  Create Short Description
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
            <div className='col-sm-3'>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.createTitle.bind(this)}>
                  Create Title
                </button>
              </div>
            </div>
          </div>

          {nodes}

          <div className={this.state.contentList.length > 0 ? 'form-group' : 'form-group hidden'}>
            <button type='submit' onClick={this.submit.bind(this)} className='btn btn-primary'>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditVenue;
