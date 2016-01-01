import React from 'react';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';
import WidgetSelectList from '../../Widgets/WidgetSelectList';
import TemplateHelper from '../TemplateHelper';

class BasicTemplateEdit extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 1;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }
  onAddWidgetToContentList(factoryInstance){
    this.props.contentList.push(factoryInstance);
    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentList();
  }
  updateContent(index, event) {
    this.props.contentList[index].value = event.target.value;
    this.props.setStateForContentList();
  }
  removeContent(index, event){
    this.props.contentList.splice(index, 1);
    this.props.setStateForContentList();
  }
  render() {
    var widgetListPropsData = {onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this), templateId: this.templateId};

    let nodes = this.props.contentList.map((contentItem, index) => {
      var propsData = {contentItem: contentItem, isEdit: true,
        onChange:  this.updateContent.bind(this, index),
        onRemove: this.removeContent.bind(this, index)};

        return (
          <div key={contentItem.sort_order}>
            <Field {...propsData} />
          </div>
        );
    });

    return (
      <div className='Content-panel'>
        <div className="Content-container Content-centered-container">
          <WidgetSelectList {...widgetListPropsData} />

          {nodes}

          <div className={this.props.contentList.length > 0 ? 'form-group' : 'form-group hidden'}>
            <button type='submit' onClick={this.props.submit} className='btn btn-primary'>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicTemplateEdit;
