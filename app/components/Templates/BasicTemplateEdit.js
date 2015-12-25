import React from 'react';
import {Link} from 'react-router';
import Field from '../Widgets/Field/Field';
import FieldHelper from '../Widgets/Field/FieldHelper';
import EmptyContent from '../EmptyContent';
import {_} from 'underscore';
import LongDescription from '../Widgets/LongDescription/LongDescription';
import ImageWidget from '../Widgets/Image/ImageWidget';
import Title from '../Widgets/Title/Title';
import ShortDescription from '../Widgets/ShortDescription/ShortDescription';
import LongDescriptionFactory from '../Widgets/LongDescription/LongDescriptionFactory';
import ImageFactory from '../Widgets/Image/ImageFactory';
import TitleFactory from '../Widgets/Title/TitleFactory';
import ShortDescriptionFactory from '../Widgets/ShortDescription/ShortDescriptionFactory';

class BasicTemplateEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }
  //todo: move to actions
  createLongDescription(event){
    var sortOrder = this.props.contentList.length + 1;

    var longDescriptionFactory = new LongDescriptionFactory(sortOrder, 'Our Story Description',
      'Our Story Description');
    var longDescription = longDescriptionFactory.create();
    longDescription.template_id = 1;

    this.props.contentList.push(longDescription);
    this.props.setStateForContentList();
    //this.setState({contentList: this.props.contentList});
  }
  createShortDescription(event){
    debugger;
    var sortOrder = this.props.contentList.length + 1;

    var shortDescriptionFactory = new ShortDescriptionFactory(sortOrder, 'The Wedding Description',
      'The Wedding Description');
    var shortDescription = shortDescriptionFactory.create();
    shortDescription.template_id = 1;

    this.props.contentList.push(shortDescription);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.state.contentList});
  }
  createTitle(event){
    var sortOrder = this.props.contentList.length + 1;

    var factory = new TitleFactory(sortOrder, 'The Wedding Title',
      'The Wedding Title');
    var title = factory.create();
    title.template_id = 1;

    this.props.contentList.push(title);
    this.props.setStateForContentList();
    //this.setState({contentList: this.state.contentList});
  }
  //todo: move to actions
  createImage(event){
    var sortOrder = this.props.contentList.length + 1;

    var imageFactory = new ImageFactory(sortOrder, 'Our Story Image',
      'Our Story Image');
    var image = imageFactory.create();
    image.template_id = 1;

    this.props.contentList.push(image);
    this.props.setStateForContentList();
  //  this.setState({contentList: this.props.contentList});
  }
  updateContent(index, event) {
    this.props.contentList[index].value = event.target.value;
    this.props.setStateForContentList();
    //this.setState({contentList: this.state.contentList});
  }
  removeContent(index, event){
    this.props.contentList.splice(index, 1);
    this.props.setStateForContentList();
    //this.setState({contentList: this.state.contentList});
  }
  render() {
    let nodes = this.props.contentList.map((contentItem, index) => {
      var propsData = {value: contentItem.value, isEdit: true,
        onChange:  this.updateContent.bind(this, index),
        onRemove: this.removeContent.bind(this, index)};

        if(FieldHelper.isDescription(contentItem)){
          return (
            <div key={contentItem.sort_order} className="form-group">
              <LongDescription {...propsData} />
            </div>
          );
        }
        else if(FieldHelper.isShortDescription(contentItem)){
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
        else if(FieldHelper.isTitle(contentItem)){
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
            <div className='col-sm-3'>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.createTitle.bind(this)}>
                  Create Title
                </button>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.createShortDescription.bind(this)}>
                  Create Short Description
                </button>
              </div>
            </div>
          </div>

          {nodes}

          <div className={this.props.contentList.length > 0 ? 'form-group' : 'form-group hidden'}>
            <button type='submit' onClick={this.props.submit} className='btn btn-primary'>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicTemplateEdit;
