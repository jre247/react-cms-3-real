import React from 'react';
import ContentSettingsReadOnly from '../Components/ContentSettings/ContentSettingsReadOnly';
import {_} from 'underscore';

class LongDescriptionElementEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    var propsData = _.extend({isContentEditable: true}, this.props);
    return (
      <ContentSettingsReadOnly {...propsData}>
        <textarea className='form-control Widget-input' placeholder="Long Description"
          value={this.props.value} onChange={this.props.onChange} style={this.props.styles}>
        </textarea>
      </ContentSettingsReadOnly>
    );
  }
}

export default LongDescriptionElementEdit;
