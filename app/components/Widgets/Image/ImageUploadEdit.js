import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';
import ContentSettingsReadOnly from '../Components/ContentSettings/ContentSettingsReadOnly';
import Image from './Image';
import {_} from 'underscore';
import classNames from 'classnames';
import ImageUploadFactory from './ImageUploadFactory';

class ImageUploadEdit extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isImageEditable: false,
        percentComplete: 0,
        contentList: [],
        contentIndex: null,
        isImageUploading: false,
        currentContentIndex: null,
        isMultiImageUploading: false,
        filesUploaded: [],
        filesLength: 0,
        maxContentId: null
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
      contentIndex: this.props.contentIndex,
      isMultiUpload: this.props.isMultiUpload,
      currentContentIndex: _.clone(this.props.contentIndex),
      maxContentId: this.props.maxContentId
    });
  }

  componentWillUnmount() {

  }

  uploadMultipleFiles(){
    var files = $("#image-files")[0].files;
    if(files == null){
        alert("No file(s) selected.");
    }
    else{
      this.setState({isMultiImageUploading: true, filesLength: files.length});

      _.each(files, (file, f) => {
        this.getSignedRequest(file, f);
      })
    }
  }

  uploadFile(){
    this.setState({isImageUploading: true});

    var file = $("#image-file")[0].files[0];
    if(file == null){
        alert("No file selected.");
    }
    else{
        this.getSignedRequest(file, 0);
    }
  }

  getSignedRequest(file, fileIndex){
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/sign_s3?file_name="+file.name+"&file_type="+file.type);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                var response = JSON.parse(xhr.responseText);
                self.executeUploadFile(file, fileIndex, response.signed_request, response.url);
            }
            else{
                alert("Could not get signed URL.");
            }
        }
    };
    xhr.send();
  }

  executeUploadFile(file, fileIndex, signed_request, url){
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", signed_request);
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.onload = function() {
        if (xhr.status === 200) {
          if(self.state.isMultiUpload){
              self.updateFilesUploadStatus(url, fileIndex);
          }
          else{
              self.updateContent(url);
          }

        }
    };
    xhr.onerror = function() {
        alert("Could not upload file.");
    };
    xhr.send(file);
  }

  updateFilesUploadStatus(url, fileIndex){
    var files = this.state.filesUploaded;
    files.push(url);

    this.setState({filesUploaded: files});

    if(files.length == this.state.filesLength){
      this.updateContentForMultiUpload(files);
    }
  }

  updateContentForMultiUpload(fileUrlList) {
    // remove the empty content item since adding multiple ones for multi upload
    this.state.contentList.splice(this.state.contentList.length - 1, 1);

    _.each(fileUrlList, (fileUrl) =>{
      this.buildUploadImageInstance(fileUrl);
    });

    this.setState({
      isImageEditable: false,
      isMultiImageUploading: false,
      contentList: this.state.contentList
    });

    this.props.setStateForContentList(this.state.contentList);
  }

  buildUploadImageInstance(fileUrl){
    var sortOrder = this.state.contentList.length + 1;

    var imageUploadFactory = new ImageUploadFactory(sortOrder, null, null);
    var image = imageUploadFactory.create();
    this.state.maxContentId++;
    image.id = this.state.maxContentId;
    image.value = fileUrl;

    this.state.contentList.push(image);
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
      contentIndex: this.state.contentIndex
    });
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

        var uploadStatusForMultiUpload = classNames({
          'hidden': !this.state.isMultiImageUploading,
          "col-md-6": true
        });

        var uploadSingleImageClassNames = classNames({
          'hidden': this.props.isMultiUpload,
          'col-md-12': true
        });

        var uploadMultiImageClassNames = classNames({
          'hidden': !this.props.isMultiUpload,
          'col-md-12': true
        });

        return (
          <div className="Content-image-container image-upload-area">
            <div className="image-upload-container">
              <div className="row">
                <div className={uploadSingleImageClassNames}>
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

                <div className={uploadMultiImageClassNames}>
                  <input type="file" name="file" id="image-files" multiple />

                  <div className="row">
                    <div className="col-md-6">
                      <div className="image-upload-btn">
                        <button type="button" className="btn btn-warning btn-sm" onClick={this.uploadMultipleFiles.bind(this)}>
                          Upload
                        </button>
                      </div>
                    </div>
                    <div className={uploadStatusForMultiUpload}>
                      <img src="/css/images/ajax-loader.gif" className='image-loader' />

                      ({this.state.filesUploaded.length} of {this.state.filesLength} uploaded)
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="btns-container">
              <div className='Content-Image-Edit-Button edit-content-button' onClick={this.saveImage.bind(this)}>
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
