import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../../../helpers/TemplateHelper';
import WidgetSelectList from '../../Widgets/WidgetSelectList';

class ListGridGroupColumn extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = this.props.templateId;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onAddWidgetToContentList(factoryInstance){
    var column = this.props.column;
    var contentListLength = column.contentList.length;
    this.props.contentList.splice(contentListLength + 1, 0, factoryInstance);
    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentGroupList();
  }

  render() {
  var propsData = _.extend({value: this.props.contentItem.value }, this.props);
  var widgetListPropsData = {onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
    parentIndex: this.props.contentGroupIndex, templateId: this.templateId};

    return(
      <WidgetSelectList {...widgetListPropsData} />

      <div key={index} className="List-Grid-Group-Column-Content-Item">
        <Field {...propsData} />
      </div>
    );
  }
}

export default ListGridGroupColumn;
