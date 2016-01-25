import React from 'react';
import {_} from 'underscore';
var self;

class ContentSettingsReadOnly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {settings: {}, contentItem: {}};
    self = this;
  }

  componentDidMount() {
    debugger;
    self.setState({settings: self.props.settings || {}});
  }

  componentWillReceiveProps(newProps){
    debugger;
    self.setState({settings: newProps.settings || {}});
  }

  buildWidgetStyles(){
    var divStyle = {};

    _.each(self.state.settings, (setting) =>{
      if(setting.setting_id === 1){
        divStyle['font-size'] = setting.setting_value + 'px';
      }
      else if(setting.setting_id === 2){
        divStyle['margin-bottom'] = setting.setting_value+ 'px';
      }
      else if(setting.setting_id === 3){
        divStyle['margin-top'] = setting.setting_value+ 'px';
      }
      else if(setting.setting_id === 4){
        divStyle['margin-right'] = setting.setting_value+ 'px';
      }
      else if(setting.setting_id === 5){
        divStyle['color'] = setting.setting_value;
      }
      else if(setting.setting_id === 6){
        divStyle['background-color'] = setting.setting_value;
      }
    });

    return divStyle;
  }

  render() {
    debugger;
    var divStyle = this.buildWidgetStyles();

    return (
      <div className="content-settings-container-readonly" style={divStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default ContentSettingsReadOnly;
