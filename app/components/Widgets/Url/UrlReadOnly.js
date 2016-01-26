import React from 'react';
import {Link} from 'react-router';
import ContentSettings from '../Components/ContentSettings/ContentSettings';

class UrlReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="content-url-container content-container">
        <ContentSettings {...this.props}>
          <div className="content-url">
            <a ref="link" name="link" href={this.props.value}>{this.props.value}</a>
          </div>
        </ContentSettings>
      </div>
    );
  }
}

export default UrlReadOnly;
