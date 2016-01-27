import React from 'react';

class LongDescriptionElementReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Content-long-description widget" style={this.props.styles}>
        {this.props.value}
      </div>
    );
  }
}

export default LongDescriptionElementReadOnly;
