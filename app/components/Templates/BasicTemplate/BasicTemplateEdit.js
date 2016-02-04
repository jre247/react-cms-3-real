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
  disableorting(){
    this.setState({isSortingEnabled: false});
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

        return (
          <div key={contentItem.sort_order} className='ContentItem content-item-sortable' data-id={contentItem.id}>
            <Field {...fieldsPropData} />
          </div>
        );
      });

      var sortableProps = _.extend({
        sortableItemElement: '.content-item-sortable',
        itemList: self.state.contentList,
        itemPropertyToSortBy: 'sort_order',
        setStateForItemList: self.setStateForContentList.bind(this),
        isSortingEnabled: this.state.isSortingEnabled
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
