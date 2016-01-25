import React from 'react';
import ContentSettingsEdit from './ContentSettingsEdit';
import ContentSettingsReadOnly from './ContentSettingsReadOnly';

class ContentSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(this.props.isEdit){
      return (
        <ContentSettingsEdit {...this.props} />
      );
    }
    else{
      return (
        <ContentSettingsReadOnly {...this.props} />
      );
    }
  }

}

export default ContentSettings;
