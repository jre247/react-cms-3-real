import React from 'react';

class ShortDescriptionElementReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Content-short-description widget" style={this.props.styles}>
          {this.props.value}
      </div>
    );
  }
}

export default ShortDescriptionElementReadOnly;
