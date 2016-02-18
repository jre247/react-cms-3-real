import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';
import ContentSettingsReadOnly from '../Components/ContentSettings/ContentSettingsReadOnly';
import Image from './Image';
import {_} from 'underscore';
//var awsBucket = 'jenna-and-jason-wedding';

class ImageUploadEdit extends React.Component {
  constructor(props) {
      super(props);
      this.state = {isImageEditable: false, percentComplete: 0, contentList: [], contentIndex: null};
  }

  componentDidMount() {
    if(!this.props.value){
      var contentList;
      if(this.props.isListGrid){
        contentList = this.props.contentListForColumn;
      }
      else{
        contentList = this.props.contentList;
      }

      this.setState({
        isImageEditable: true,
        contentList: contentList,
        contentIndex: this.props.contentIndex
      });
    }
  }

  componentWillUnmount() {

  }


  uploadFile(){
    var file = $("#image-file")[0].files[0];
    if(file == null){
        alert("No file selected.");
    }
    else{
        this.getSignedRequest(file);
    }
  }

  getSignedRequest(file){
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/sign_s3?file_name="+file.name+"&file_type="+file.type);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                var response = JSON.parse(xhr.responseText);
                self.executeUploadFile(file, response.signed_request, response.url);
            }
            else{
                alert("Could not get signed URL.");
            }
        }
    };
    xhr.send();
  }

  executeUploadFile(file, signed_request, url){
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", signed_request);
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.onload = function() {
        if (xhr.status === 200) {
          //$("#preview").src = url;
          //$("#avatar_url").value = url;
          self.updateContent(url);
        }
    };
    xhr.onerror = function() {
        alert("Could not upload file.");
    };
    xhr.send(file);
  }

  updateContent(url) {
    debugger;
    this.state.contentList[this.state.contentIndex].value = url;

    if(this.props.isListGrid){
      this.props.setStateForContentListForColumn(this.state.contentList);
    }
    else{
      this.props.setStateForContentList(this.state.contentList);
    }
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
            <div className="image-upload-container">
              <div className="row">
                <div className="col-md-2">
                  <label for="file">Select a File to Upload</label>
                </div>
                <div className="col-md-4">
                  <input type="file" name="file" id="image-file" />
                </div>
                <div className="col-md-2">
                  <input id="fileUpload" type="button" value="Upload" onClick={this.uploadFile.bind(this)} />
                </div>
                <div className="col-md-2">
                  <div id="progressNumber">{this.state.percentComplete}</div>%
                </div>
              </div>
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

  export default ImageUploadEdit;
