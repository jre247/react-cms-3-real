import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';
import ContentSettingsReadOnly from '../Components/ContentSettings/ContentSettingsReadOnly';
import Image from './Image';
import {_} from 'underscore';
import CryptoJS from 'crypto-js';
import AWS from 'AWS-sdk';

class ImageWidgetEdit extends React.Component {
  constructor(props) {
      super(props);
      if(!this.props.value){
        this.state = {isImageEditable: true, percentComplete: 0};
      }
      else{
        this.state = {isImageEditable: false, percentComplete: 0};
      }

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }
  getPolicyJson(){
    var policy = {
      "expiration": "2020-12-01T12:00:00.000Z",
      "conditions": [{
          "bucket": 'jenna-and-jason-wedding'
        },
        ["starts-with", "$key", ""], {
          "acl": 'public-read'
        },
        ["starts-with", "$Content-Type", ""],
        ["content-length-range", 0, 524288000]
      ]
    };

    return policy;
  }

  uploadFile(){
    // Get our File object
    var file = $('#file')[0].files[0];

    AWS.config = new AWS.Config();
    AWS.config.accessKeyId = "AKIAJVUQN6PVYROCNTNA";
    AWS.config.secretAccessKey = "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";

    // Upload the File
    var bucket = new AWS.S3({
        params: {
          Bucket: 'jenna-and-jason-wedding'
        }
      });

    var params = {
      Key: file.name,
      ContentType: file.type,
      Body: file
    };
    bucket.upload(params, function (err, data) {
      debugger;
    //  $('#results').html(err ? 'ERROR!' : 'UPLOADED.');
    });
  }

  uploadProgress(evt) {
    if (evt.lengthComputable) {
      var percentComplete = Math.round(evt.loaded * 100 / evt.total);
      this.setState({percentComplete: percentComplete});
    //  document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
    } else {
      //document.getElementById('progressNumber').innerHTML = 'unable to compute';
    }
  }

  uploadComplete(evt) {
    /* This event is raised when the server send back a response */
    alert("Done - " + evt.target.responseText);
  }

  uploadFailed(evt) {
    alert("There was an error attempting to upload the file." + evt);
  }

  uploadCanceled(evt) {
    alert("The upload has been canceled by the user or the browser dropped the connection.");
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

            <form id="form1" enctype="multipart/form-data" method="post">
              <div className="row">
                <label for="file">Select a File to Upload</label>
                <br />
                <input type="file" name="file" id="file" />
              </div>
              <div className="row">
                <input id="fileUpload" type="button" value="Upload" onClick={this.uploadFile.bind(this)} />
              </div>
              <div id="progressNumber">{this.state.percentComplete}</div>%
            </form>

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
