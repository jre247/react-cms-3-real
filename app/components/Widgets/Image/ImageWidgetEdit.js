  import React from 'react';
  import {Link} from 'react-router';

  class ImageWidgetEdit extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
      return (
        <div>
          <div className='row'>
            <div className='col-sm-6 col-md-offset-3'>
              <div className="form-group">
                <input ref="url" className='form-control' name="url" placeholder="Url" value={this.props.value}
                  onChange={this.props.onChange} autoFocus/>
              </div>
            </div>
            <div className="col-sm-2">
              <div onClick={this.props.onRemove}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </div>
            </div>
          </div>
          <div className="Content-image-container">
            <img className="Content-extra-large-image-percentage" src={this.props.value} alt="Image" />
          </div>
        </div>


      );
    }
  }

  export default ImageWidgetEdit;
