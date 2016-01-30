  import React from 'react';
  import {Link} from 'react-router';
  import ContentSettings from '../Components/ContentSettings/ContentSettings';

  class TitleEdit extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
      return (
        <div className="Content-item-container">
          <div className="Content-title Content-item">
            <input className='form-control Widget-input' placeholder="Title" value={this.props.value}
              onChange={this.props.onChange} />
          </div>

          <ContentSettings {...this.props} />

          <div className="Widget-Remove-Button-Container">
            <div onClick={this.props.onRemove}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      );
    }
  }

  export default TitleEdit;
