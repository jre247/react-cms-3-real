  import React from 'react';
  import {Link} from 'react-router';

  class ImageWidgetEdit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isImageEditable: false};
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
      return (
        <div className="Content-image-container">
          <div>
            <div className="Content-image-input-container">
              <div>
                <div className={!this.state.isImageEditable ? 'hidden' : ''}>
                  <input ref="url" className='form-control' name="url" placeholder="Url" value={this.props.value}
                    onChange={this.props.onChange} autoFocus/>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="Content-Image">
              <div className={this.state.isImageEditable ? 'hidden' : ''}>
                <img className="Content-extra-large-image-percentage" src={this.props.value} alt="Image" />

                <div className="Content-Image-Edit-Button">
                  <div className={!this.state.isImageEditable ? 'edit-content-button hidden' : 'edit-content-button '}
                    onClick={this.saveImage.bind(this)}>
                      <span className="glyphicon glyphicon-ok" />
                  </div>
                </div>
                <div className="Content-Image-Edit-Button">
                  <div className={this.state.isImageEditable ? 'edit-content-button hidden' : 'edit-content-button'}
                    onClick={this.editImage.bind(this)}>
                      <span className="glyphicon glyphicon-pencil" />
                  </div>
                </div>
                <div className="Widget-Remove-Button-Container">
                  <div onClick={this.props.onRemove}>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
            </div>






          </div>

        </div>


      );
    }
  }

  export default ImageWidgetEdit;
