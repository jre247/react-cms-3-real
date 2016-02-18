import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';
import ContentSettingsReadOnly from '../Components/ContentSettings/ContentSettingsReadOnly';
import Image from './Image';
import {_} from 'underscore';
import classNames from 'classnames';

class ImageUploadEdit extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isImageEditable: false,
        percentComplete: 0,
        contentList: [],
        contentIndex: null,
        isImageUploading: false
      };
  }

  componentDidMount() {
    var isImageEditable = false;

    var contentList;
    if(this.props.isListGrid){
      contentList = this.props.contentListForColumn;
    }
    else{
      contentList = this.props.contentList;
    }

    if(!this.props.value){
      isImageEditable = true;
    }

    this.setState({
      isImageEditable: isImageEditable,
      contentList: contentList,
      contentIndex: this.props.contentIndex
    });
  }

  componentWillUnmount() {

  }


  uploadFile(){
    this.setState({isImageUploading: true});

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
    this.state.contentList[this.state.contentIndex].value = url;

    if(this.props.isListGrid){
      this.props.setStateForContentListForColumn(this.state.contentList);
    }
    else{
      this.props.setStateForContentList(this.state.contentList);
    }

    this.setState({
      contentList: this.state.contentList,
      isImageEditable: false,
      isImageUploading: false,
      contentList: this.state.contentList,
      contentIndex: this.state.contentIndex
    })
  }

  editImage(){
      this.setState({isImageEditable: true});
  }
  saveImage(){
      this.setState({isImageEditable: false});
  }

  render() {
      if(this.state.isImageEditable){
        var spinnerClass = classNames({
          'hidden': !this.state.isImageUploading,
          'image-loader': true
        });

        return (
          <div className="Content-image-container image-upload-area">
            <div className="image-upload-container">
              <div className="row">
                <div className="col-md-12">
                  <input type="file" name="file" id="image-file" />

                  <div className="row">
                    <div className="col-md-6">
                      <div className="image-upload-btn">
                        <button type="button" className="btn btn-warning btn-sm" onClick={this.uploadFile.bind(this)}>
                          Upload
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src="/css/images/ajax-loader.gif" className={spinnerClass} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="btns-container">
              <div className="Content-Image-Edit-Button edit-content-button" onClick={this.saveImage.bind(this)}>
                <span className="glyphicon glyphicon-ok" />
              </div>

              <ContentSettings {...this.props} />

              <div className="Widget-Remove-Button-Container" onClick={this.props.onRemove}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </div>
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
