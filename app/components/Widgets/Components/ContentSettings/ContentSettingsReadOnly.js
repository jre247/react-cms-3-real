import React from 'react';
import {_} from 'underscore';

class ContentSettingsReadOnly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {styles: {}, settings: {}, contentItem: {}};
  }

  componentDidMount() {
    var styles = this.buildWidgetStyles(this.props.settings);
    this.setState({contentItem: this.props.contentItem, styles: styles, settings: this.props.settings || {}});
  }

  componentWillReceiveProps(newProps){
    var styles = this.buildWidgetStyles(newProps.settings);
    this.setState({contentItem: this.props.contentItem, styles: styles, settings: newProps.settings || {}});
  }

  buildWidgetStyles(settings){
    var styles = {};

    _.each(settings, (setting) =>{
      if(setting.setting_id === 1){
        styles['fontSize'] = setting.setting_value + 'px';
      }
      else if(setting.setting_id === 2){
        styles['marginBottom'] = setting.setting_value+ 'px';
      }
      else if(setting.setting_id === 3){
        styles['marginTop'] = setting.setting_value+ 'px';
      }
      else if(setting.setting_id === 4){
        styles['marginRight'] = setting.setting_value+ 'px';
      }
      else if(setting.setting_id === 5){
        styles['marginLeft'] = setting.setting_value;
      }
      else if(setting.setting_id === 6){
        styles['color'] = setting.setting_value;
      }
      else if(setting.setting_id === 7){
        styles['backgroundColor'] = setting.setting_value;
      }
    });

    return styles;
  }

  render() {
    return (
      <div className="content-settings-container-readonly" style={this.state.styles}>
        {this.props.children}
      </div>
    );
  }
}

export default ContentSettingsReadOnly;
