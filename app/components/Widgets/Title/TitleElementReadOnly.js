import React from 'react';

class TitleElementReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Content-title" style={this.props.styles}>
          {this.props.value}
      </div>
    );
  }
}

export default TitleElementReadOnly;
