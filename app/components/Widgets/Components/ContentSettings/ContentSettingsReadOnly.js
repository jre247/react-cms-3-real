import React from 'react';
import {_} from 'underscore';
import ReactAddOns from 'react/addons';

class ContentSettingsReadOnly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {containerStyles: {}, widgetStyles: {}, settings: {}, contentItem: {}};
  }

  componentDidMount() {
    this.setStyles(this.props);
  }

  componentWillReceiveProps(newProps){
    this.setStyles(newProps);
  }

  setStyles(propsData){
    var containerStyles = this.buildWidgetStyles(propsData.settings);
    var widgetStyles = this.getStylesForWidgetElement(containerStyles);

    //remove width and height from container styles
    containerStyles['width'] = null;
    containerStyles['height'] = null;
    containerStyles['marginLeft'] = null;
    containerStyles['marginRight'] = null;

    this.setState({contentItem: propsData.contentItem, widgetStyles: widgetStyles,
      containerStyles: containerStyles, settings: propsData.settings || {}});
  }

  getStylesForWidgetElement(styles){
    var widgetElementStyles = {};
    var width = styles['width'];
    if(width){
      widgetElementStyles['width'] = width;
    }
    var height = styles['height'];
    if(height){
      widgetElementStyles['height'] = height;
    }
    var marginLeft = styles['marginLeft'];
    if(marginLeft){
      widgetElementStyles['marginLeft'] = marginLeft;
    }
    var marginRight= styles['marginRight'];
    if(marginRight){
      widgetElementStyles['marginRight'] = marginRight;
    }

    return widgetElementStyles
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
      else if(setting.setting_id === 8){
        styles['width'] = setting.setting_value+ 'px';
      }
      else if(setting.setting_id === 9){
        styles['height'] = setting.setting_value+ 'px';
      }
    });

    return styles;
  }

  renderChildren() {
    var widgetStyles = this.state.widgetStyles;

    return ReactAddOns.Children.map(this.props.children, function (child) {
      return ReactAddOns.addons.cloneWithProps(child, {
        styles: widgetStyles
      })
    }.bind(this))
  }

  render() {
    return (
      <div className="content-settings-container-readonly" style={this.state.containerStyles}>
        {this.renderChildren()}
      </div>
    );
  }
}

export default ContentSettingsReadOnly;
