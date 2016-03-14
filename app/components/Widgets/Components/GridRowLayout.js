import React from 'react';
import classNames from 'classnames';
import {_} from 'underscore';
import Resizable from './Resizable';

class GridRowLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isResizing: false, contentList: null, contentItem: null, originalSizes: {},
      originalSettings: {}};
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

    this.setState({isResizing: true, originalSizes: this.state.originalSizes});

    var setting = this.getSpacingBelowSetting(contentItem);

    var newSettingValue = this.getNewSpacingBelowSettingValue(height, originalHeight);

    setting.setting_value = newSettingValue;
    contentItem.settings[2] = setting;

    if(this.props.isListGridTemplate){
      this.updateContentItemForListGridTemplate(contentItem, contentItemIndex, newSettingValue);
    }
    else{
      this.state.contentList[contentItemIndex] = contentItem;

      // find the spacing below/above from whichever content item was changed and use that for all
      // content items
      this.updateSpacingBelowSettingForAllContents(newSettingValue);
    }
  }

  setNewWidth(contentItem, contentItemIndex, width, originalWidth){
    if(!this.state.originalSizes.width){
      this.state.originalSizes.width = originalWidth + 10; // add padding
    }

    this.setState({isResizing: true, originalSizes: this.state.originalSizes});

    var setting = this.getSpacingRightSetting(contentItem);

    var newSettingValue = this.getNewSpacingRightSettingValue(width, originalWidth);

    setting.setting_value = newSettingValue;
    contentItem.settings[4] = setting;

    if(this.props.isListGridTemplate){
      this.updateContentItemForListGridTemplate(contentItem, contentItemIndex, width);
    }
    else{
      this.state.contentList[contentItemIndex] = contentItem;

      // find the spacing below/above from whichever content item was changed and use that for all
      // content items
    //  this.updateSpacingBelowSettingForAllContents(newSettingValue);
    }
  }

  updateContentItemForListGridTemplate(contentItem, contentItemIndex, newSettingValue){
    var contentGroupIndex = _.clone(this.props.contentGroupIndex);

    if(!contentItem.parent_index && typeof contentItem.parent_index !== 'number'){
      var contentGroupItem = this.props.contentGroupList[contentGroupIndex];
      contentGroupItem.parentListItem = contentItem;
    }
    else{
      var row = contentItem.row_number;
      var column = contentItem.column_number;

      var contentGroupItem = this.props.contentGroupList[contentGroupIndex];
      var contentList = contentGroupItem.rows[row].columns[column].contentList;
      contentList[contentItemIndex] = contentItem;
    }

    this.props.setStateForContentGroupList();

    // find the spacing below/above from whichever content item was changed and use that for all
    // content items
    this.updateSpacingBelowSettingForAllContents(newSettingValue);
  }
  getSpacingRightSetting(contentItem){
    var settings = contentItem.settings;
    var setting = settings[4];
    if(!setting){
      setting = {
        content_id: contentItem.id,
        setting_id: 4
      }
    }
    else{
      if(!this.state.originalSettings.spacingRight){
        this.state.originalSettings.spacingRight = parseInt(setting.setting_value);
      }
    }

    return setting;
  }
  getSpacingBelowSetting(contentItem){
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

    return setting;
  }
  getNewSpacingBelowSettingValue(height, originalHeight){
    var newSettingValue = null;
    if(this.state.originalSettings.spacingBelow > 0){
      newSettingValue = this.state.originalSettings.spacingBelow + (height - this.state.originalSizes.height);
    }
    else{
      newSettingValue = height - originalHeight;
    }

    // make sure setting value is never below 0
    if(newSettingValue < 0){
      newSettingValue = 0;
    }

    return newSettingValue;
  }
  getNewSpacingRightSettingValue(width, originalWidth){
    var newSettingValue = null;
    if(this.state.originalSettings.spacingRight > 0){
      newSettingValue = this.state.originalSettings.spacingRight + (width - this.state.originalSizes.width);
    }
    else{
      newSettingValue = width - originalWidth;
    }

    // make sure setting value is never below 0
    if(newSettingValue < 0){
      newSettingValue = 0;
    }

    return newSettingValue;
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

      this.props.setStateForContentList(self.state.contentList);
    }
  }

  getContentItemContainerStyles(contentItem){
    var contentItemContainerStyles = {};
    var settings = contentItem.settings;
    if(!settings){
      return null;
    }
    var spacingAbove = _.clone(settings[3]);
    var spacingBelow = _.clone(settings[2]);
    if(spacingAbove || spacingBelow){
      if(spacingBelow){
        contentItemContainerStyles.marginBottom = spacingBelow.setting_value;
      }
      if(spacingAbove){
        contentItemContainerStyles.marginTop = spacingAbove.setting_value
      }
    }

    var spacingRight = _.clone(settings[4]);
    var spacingLeft = _.clone(settings[5]);

    // for now don't add spacing right for list grid template since it's manually added
    if(spacingRight && !this.props.suppressSpacingRight){
      if(this.props.useRelativePositioningForSpacingRight){
        contentItemContainerStyles.position = 'relative';
        contentItemContainerStyles.right = spacingRight.setting_value;
      }
      else{
        contentItemContainerStyles.marginRight = spacingRight.setting_value;
      }
    }
    if(spacingLeft){
      contentItemContainerStyles.marginLeft = spacingLeft.setting_value;
    }

    return contentItemContainerStyles;
  }

  render() {
    var resizableProps = _.extend({
        setNewWidth: this.setNewWidth.bind(this, this.props.contentItem, this.props.contentIndex),
        setNewHeight: this.setNewHeight.bind(this, this.props.contentItem, this.props.contentIndex),
        isResizable: this.props.isEdit ? true : false,
        alsoResizeElement: '.grid-row-layout > div',
        alsoResize: this.props.alsoResize
      }, this.props);

    var contentItemContainerStyles;
    if(this.props.contentItem){
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
