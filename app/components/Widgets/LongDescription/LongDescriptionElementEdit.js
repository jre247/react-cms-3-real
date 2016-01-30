import React from 'react';
import ContentSettingsReadOnly from '../Components/ContentSettings/ContentSettingsReadOnly';

class LongDescriptionElementEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <ContentSettingsReadOnly {...this.props}>
        <textarea className='form-control Widget-input' placeholder="Long Description"
          value={this.props.value} onChange={this.props.onChange} style={this.props.styles}>
        </textarea>
      </ContentSettingsReadOnly>
    );
  }
}

export default LongDescriptionElementEdit;
