import React from 'react';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';
import WidgetSelectList from '../../Widgets/WidgetSelectList';
import TemplateHelper from '../TemplateHelper';
import WidgetService from '../../Widgets/WidgetService';
import API from '../../../API';
import Sortable from '../../Widgets/Components/Sortable';
import Resizable from '../../Widgets/Components/Resizable';
var self;

class BasicTemplateEdit extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 1;
    this.state = {contentList: [], isSortingEnabled: true};
    this.maxContentId;
    self = this;
  }

  componentDidMount() {
    this.getContentListForPage(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.getContentListForPage(nextProps);
  }

  setStateForContentList(newContentList){
    self.setState({contentList: newContentList || []});
  }

  getContentListForPage(propsData){
    WidgetService.getContentListForPage(propsData.pageId, propsData.isEdit).then(function(viewmodel){
      self.setState({contentList: viewmodel.contentList || []});

      var contentItemWithMaxId = _.max(viewmodel.contentList, function(contentItem){ return contentItem.id; });
      self.maxContentId = contentItemWithMaxId.id;
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    WidgetService.save(self.state.contentList, self.props.pageId).then(function(){
      self.props.history.pushState(null, '/' + self.props.readOnlyPageLink);
    });
  }

  onAddWidgetToContentList(factoryInstance){
    self.maxContentId++;
    factoryInstance.id = self.maxContentId;

    self.state.contentList.push(factoryInstance);
    TemplateHelper.setNewSortOrderForAllListItems(self.state.contentList);
    self.setStateForContentList(self.state.contentList);
  }
  updateContent(index, event) {
    self.state.contentList[index].value = event.target.value;
    self.setStateForContentList(self.state.contentList);
  }
  removeContent(index, event){
    self.state.contentList.splice(index, 1);
    self.setStateForContentList(self.state.contentList);
  }
  onSettingsSave(contentItem, contentIndex){
    self.state.contentList[contentIndex] = contentItem;
    self.setStateForContentList(self.state.contentList);
  }
  enableSorting(){
    this.setState({isSortingEnabled: true});
  }
  disableSorting(){
    this.setState({isSortingEnabled: false});
  }
  setNewHeight(contentItem, contentItemIndex, height, originalHeight){
    var settings = contentItem.settings;
    var setting = settings[2];
    if(!setting){
      setting = {
        content_id: contentItem.id,
        setting_id: 2
      }
    }
    setting.setting_value = height - originalHeight;
    contentItem.settings[2] = setting;

    self.state.contentList[contentItemIndex] = contentItem;
    self.setState({isResizing: true});
    self.setStateForContentList(self.state.contentList);
  }
  setNewWidth(width, contentItem){
    self.setState({isResizing: true});
  }
  getContentItemContainerStyles(contentItem){
    var contentItemContainerStyles = null;
    var settings = contentItem.settings;
    var spacingAbove = settings[3];
    var spacingBelow = settings[2];
    if(!this.state.isResizing && (spacingAbove || spacingBelow)){
      contentItemContainerStyles = { };

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
    var widgetListPropsData = {
      onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
      templateId: this.templateId,
      row_number: 1, column_number: 1
    };

    if(_.isEmpty(self.state.contentList)){
      return (
        <div>
          <WidgetSelectList {...widgetListPropsData} />

          <EmptyContent {...this.props} />
        </div>
      );
    }
    else{
      let nodes = self.state.contentList.map((contentItem, index) => {
        var propsData = {
          contentItem: contentItem,
          settings: contentItem.settings,
          contentIndex: index,
          onSettingsSave: this.onSettingsSave.bind(this),
          onChange:  this.updateContent.bind(this, index),
          onRemove: this.removeContent.bind(this, index)
        };

        var fieldsPropData = _.extend(propsData, self.props);

        var resizableProps = _.extend({
            setNewWidth: this.setNewWidth.bind(this, contentItem, index),
            setNewHeight: this.setNewHeight.bind(this, contentItem, index),
            isResizable: true
          }, this.props);

        var contentItemContainerStyles = this.getContentItemContainerStyles(contentItem);

        return (
          <div key={contentItem.sort_order} className='ContentItem content-item-sortable' data-id={contentItem.id}>
            <div className="content-item-container" style={contentItemContainerStyles}>
              <Resizable {...resizableProps}>
                <Field {...fieldsPropData} />
              </Resizable>
            </div>
          </div>
        );
      });

      var sortableProps = _.extend({
        sortableItemElement: '.content-item-sortable',
        itemList: self.state.contentList,
        itemPropertyToSortBy: 'sort_order',
        setStateForItemList: self.setStateForContentList.bind(this),
        isSortingEnabled: true
      }, this.props);

      return(
        <div className='Content-panel basic-template-edit'>
          <div className="Content-container Content-centered-container">
            <WidgetSelectList {...widgetListPropsData} />

            <Sortable {...sortableProps}>
              <div>
                {nodes}
              </div>
            </Sortable>

            <div className={this.state.contentList.length > 0 ? 'form-group' : 'form-group hidden'}>
              <button type='submit' onClick={this.submit} className='btn btn-primary'>Save</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BasicTemplateEdit;
