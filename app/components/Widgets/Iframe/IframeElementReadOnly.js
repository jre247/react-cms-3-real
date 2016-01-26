import React from 'react';

class IframeElementReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Content-item">
        <iframe src={this.props.value} className="Content-iframe widget" style={this.props.styles}>
        </iframe>
      </div>
    );
  }
}

export default IframeElementReadOnly;
