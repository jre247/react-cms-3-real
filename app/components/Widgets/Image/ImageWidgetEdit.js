import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';
import ContentSettingsReadOnly from '../Components/ContentSettings/ContentSettingsReadOnly';
import Image from './Image';
import {_} from 'underscore';

class ImageWidgetEdit extends React.Component {
  constructor(props) {
      super(props);
      if(!this.props.value){
        this.state = {isImageEditable: true};
      }
      else{
        this.state = {isImageEditable: false};
      }

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  editImage(){
      this.setState({isImageEditable: true});
  }
  saveImage(){
      this.setState({isImageEditable: false});
  }

  render() {
      if(this.state.isImageEditable){
        return (
          <div className="Content-image-container">
            <div className="Content-image-input-container">
                <input ref="url" className='form-control' name="url" placeholder="Url" value={this.props.value}
                  onChange={this.props.onChange} autoFocus/>
            </div>
            <div className="Content-Image-Edit-Button edit-content-button" onClick={this.saveImage.bind(this)}>
              <span className="glyphicon glyphicon-ok" />
            </div>

            <ContentSettings {...this.props} />

            <div className="Widget-Remove-Button-Container" onClick={this.props.onRemove}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </div>
          </div>
        )
      }
      else{
        var propsData = _.extend({isContentEditable: true}, this.props);
        return (
          <div className="Content-image-container">
            <ContentSettingsReadOnly {...propsData}>
              <Image {...this.props} />
            </ContentSettingsReadOnly>

            <div className="Content-Image-Edit-Button edit-content-button" onClick={this.editImage.bind(this)}>
              <span className="glyphicon glyphicon-pencil" />
            </div>

            <ContentSettings {...this.props} />

            <div className="Widget-Remove-Button-Container" onClick={this.props.onRemove}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </div>
          </div>
        );
      }
    }
  }

  export default ImageWidgetEdit;
