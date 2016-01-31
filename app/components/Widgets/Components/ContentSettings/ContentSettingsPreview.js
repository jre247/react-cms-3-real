import React from 'react';
import {_} from 'underscore';
import Field from '../../Field/Field';
var self;

class ContentSettingsPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contentItem: null};

    self = this;
  }

  componentDidMount() {
    var contentItem  = this.props.contentItemReference;
    this.setState({contentItem: contentItem});
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }   


  render() {
    if(this.state.contentItem){
      var contentItem = _.clone(this.state.contentItem);
      var settings = _.clone(this.props.settingsToEdit);
      contentItem.settings = settings

      var propsData = {
        contentItem: contentItem,
        settings: settings
      };

      return (
        <div className="content-settings-preview">
          <div className='ContentItem'>
            <Field key={this.guid()} {...propsData} />
          </div>
        </div>
      );
    }
    else{
      return (
          <span />
      );
    }
  }
}

export default ContentSettingsPreview;
