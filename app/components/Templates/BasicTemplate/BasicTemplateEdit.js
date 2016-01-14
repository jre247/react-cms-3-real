import React from 'react';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';
import WidgetSelectList from '../../Widgets/WidgetSelectList';
import TemplateHelper from '../TemplateHelper';
import API from '../../../API';
var self;

class BasicTemplateEdit extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 1;
    this.state = {contentList: []};
    self = this;
  }

  componentDidMount() {
    API.getContentListForPage(this.props.pageId, this.props.isEdit).then(function(viewmodel){
      self.setStateForContentList(viewmodel.contentList);
    });
  }

  //need to get page in this method since componentDidMount does not get called when
  //changing routes to another page
  componentWillReceiveProps(nextProps){
    API.getContentListForPage(nextProps.pageId, nextProps.isEdit).then(function(viewmodel){
      self.setStateForContentList(viewmodel.contentList);
    });
  }

  componentWillUnmount() {

  }
  setStateForContentList(newContentList){
    self.setState({contentList: newContentList})
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    API.saveContentListForPage(self.state.contentList, self.props.pageId).then(function(){
      self.props.history.pushState(null, self.props.readOnlyPageLink);
    });
  }

  onAddWidgetToContentList(factoryInstance){
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
  render() {
    var widgetListPropsData = {onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
      templateId: this.templateId, row_number: 1, column_number: 1};

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
        var propsData = {contentItem: contentItem,
          onChange:  this.updateContent.bind(this, index),
          onRemove: this.removeContent.bind(this, index)};

        var fieldsPropData = _.extend(propsData, self.props);

        return (
          <div key={contentItem.sort_order}>
            <Field {...fieldsPropData} />
          </div>
        );
      });

      return(
        <div className='Content-panel'>
          <div className="Content-container Content-centered-container">
            <WidgetSelectList {...widgetListPropsData} />

            {nodes}

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
