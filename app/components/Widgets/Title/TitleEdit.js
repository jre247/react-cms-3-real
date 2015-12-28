  import React from 'react';
  import {Link} from 'react-router';

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
        <div className='row'>
          <div className='col-sm-8'>
            <div className="form-group">
              <input className='form-control' placeholder="Title" value={this.props.value}
                onChange={this.props.onChange} autoFocus/>
            </div>
          </div>
          <div className="col-sm-2">
            <div onClick={this.props.onRemove}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </div>
          </div>
        </div>


      );
    }
  }

  export default TitleEdit;
