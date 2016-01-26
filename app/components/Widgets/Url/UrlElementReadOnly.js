import React from 'react';

class UrlElementReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
        <div className="content-url widget">
          <a ref="link" name="link" style={this.props.styles} href={this.props.value}>{this.props.value}</a>
        </div>
    );
  }
}

export default UrlElementReadOnly;
