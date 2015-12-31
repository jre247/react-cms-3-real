import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../../Templates/TemplateHelper';
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

  updateContent(index, event) {
    this.props.column.contentList[index].value = event.target.value;
    this.props.setStateForContentGroupList();
  }

  removeContent(index, event){
    this.props.column.contentList.splice(index, 1);
    TemplateHelper.setSortOrderAndRowAndColumnForContentGroups(this.props.contentGroupList);
    this.props.setStateForContentGroupList();
  }

  onAddWidgetToContentList(factoryInstance){
    var column = this.props.column;
    var contentListLength = column.contentList.length;
    this.props.column.contentList.splice(contentListLength + 1, 0, factoryInstance);

    TemplateHelper.setSortOrderAndRowAndColumnForContentGroups(this.props.contentGroupList);
    this.props.setStateForContentGroupList();
  }

  render() {
    var widgetListPropsData = {onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
      parentIndex: this.props.contentGroupIndex, templateId: this.templateId, row_number: this.props.row_number,
      column_number: this.props.column_number};

    let nodes = this.props.column.contentList.map((contentItem, index) => {
      var propsData = {
        value: contentItem.value,
        contentItem: contentItem,
        onRemove: this.removeContent.bind(this, index),
        onChange: this.updateContent.bind(this, index)
      };
      var fieldPropsData = _.extend(propsData, this.props);

      return(
        <div key={index} className="List-Grid-Group-Column-Content-Item col-md-12">
          <Field {...fieldPropsData} />
        </div>
      );
    });

    return (
      <div>
        <div>
          <WidgetSelectList {...widgetListPropsData} />

          <div className='row'>
            {nodes}
          </div>
        </div>
      </div>
    );
  }
}

export default ListGridGroupColumn;
