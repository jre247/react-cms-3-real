import React from 'react';
import classNames from 'classnames';
import {_} from 'underscore';
import Resizable from './Resizable';

class GridRowLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isResizing: false, contentList: null, contentItem: null, originalSizes: {}, originalSettings: {}};
  }

  componentDidMount() {
    this.setState({contentList: this.props.contentList, contentItem: this.props.contentItem});
  }

  componentWillUnmount() {

  }

  setNewHeight(contentItem, contentItemIndex, height, originalHeight){
    if(!this.state.originalSizes.height){
      this.state.originalSizes.height = originalHeight;
    }

    var settings = contentItem.settings;
    var setting = settings[2];
    if(!setting){
      setting = {
        content_id: contentItem.id,
        setting_id: 2
      }
    }
    else{
      if(!this.state.originalSettings.spacingBelow){
        this.state.originalSettings.spacingBelow = parseInt(setting.setting_value);
      }
    }

    var newSettingValue = null;
    if(this.state.originalSettings.spacingBelow > 0){
      newSettingValue = this.state.originalSettings.spacingBelow + (height - this.state.originalSizes.height);
    }
    else{
      newSettingValue = height - originalHeight;
    }

    setting.setting_value = newSettingValue;
    contentItem.settings[2] = setting;

    this.state.contentList[contentItemIndex] = contentItem;

    // find the spacing below/above from whichever content item was changed and use that for ALL
    // content items
    this.updateSpacingBelowSettingForAllContents(newSettingValue);

    this.setState({isResizing: true, originalSizes: this.state.originalSizes});
    this.props.setStateForContentList(this.state.contentList);
  }
  updateSpacingBelowSettingForAllContents(newSettingValue){
    if(this.props.changeSpacingAsRelative){
      var self = this;
      _.each(self.state.contentList, (contentItemCompare, indexCompare) =>{
        var settingsCompare = contentItemCompare.settings;
        var spacingBelow = settingsCompare[2];
        if(!spacingBelow){
          spacingBelow = {content_id: contentItemCompare.id, setting_id: 2};
        }
        spacingBelow.setting_value = newSettingValue;

        contentItemCompare.settings[2] = spacingBelow;
        self.state.contentList[indexCompare] = contentItemCompare;
      });
    }
  }
  setNewWidth(width, contentItem){
    this.setState({isResizing: true});
  }
  getContentItemContainerStyles(contentItem){
    var contentItemContainerStyles = null;
    var settings = contentItem.settings;
    var spacingAbove = _.clone(settings[3]);
    var spacingBelow = _.clone(settings[2]);
    if(spacingAbove || spacingBelow){
      contentItemContainerStyles = {};

      if(spacingBelow){
        contentItemContainerStyles.marginBottom = spacingBelow.setting_value;
      }
      if(spacingAbove){
        contentItemContainerStyles.marginTop = spacingAbove.setting_value
      }
    }

    return contentItemContainerStyles;
  }

  render() {
    var resizableProps = _.extend({
        setNewWidth: this.setNewWidth.bind(this, this.props.contentItem, this.props.contentIndex),
        setNewHeight: this.setNewHeight.bind(this, this.props.contentItem, this.props.contentIndex),
        isResizable: true,
        alsoResizeElement: '.grid-row-layout > div'
      }, this.props);

    var contentItemContainerStyles;
    if(!this.state.isResizing){
      contentItemContainerStyles = this.getContentItemContainerStyles(this.props.contentItem);
    }

    var contentItemContainerClass = classNames({
      'content-item-container': true,
      'content-item-container-resizable': this.state.isResizing
    });

    return (
      <div className="grid-row-layout">
        <Resizable {...resizableProps}>
          <div className={contentItemContainerClass} style={contentItemContainerStyles}>
            {this.props.children}
          </div>
        </Resizable>
      </div>
    )
  }
}

export default GridRowLayout;
