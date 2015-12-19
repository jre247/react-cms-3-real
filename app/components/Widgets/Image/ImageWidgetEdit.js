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
        <input ref="url" className='form-control' name="url" placeholder="Url" value={this.props.value}
          onChange={this.props.onChange} autoFocus/>
      );
    }
  }

  export default ImageWidgetEdit;
