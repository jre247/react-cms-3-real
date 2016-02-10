import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../../Templates/TemplateHelper';
import WidgetSelectList from '../../Widgets/WidgetSelectList';
import GridRowLayout from '../../Widgets/Components/GridRowLayout';
var self;

class ListGridGroupColumn extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = this.props.templateId;
    self = this;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  updateContent(index, event) {
    this.props.column.contentList[index].value = event.target.value;
    this.props.setStateForContentGroupList();
  }

  onSettingsSave(contentItem, contentIndex, contentGroupIndex){
    if(!contentItem.parent_index && typeof contentItem.parent_index !== 'number'){
      var contentGroupItem = this.props.contentGroupList[contentGroupIndex];
      contentGroupItem.parentListItem = contentItem;
    }
    else{
      var row = contentItem.row_number;
      var column = contentItem.column_number;

      var contentGroupItem = this.props.contentGroupList[contentGroupIndex];
      var contentList = contentGroupItem.rows[row].columns[column].contentList;
      contentList[contentIndex] = contentItem;
    }

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
  onGridRowLayoutChange(size){

  }

  render() {
    var widgetListPropsData = {
      onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
      parentIndex: this.props.contentGroupIndex,
      templateId: this.templateId,
      row_number: this.props.row_number,
      column_number: this.props.column_number
    };

    let nodes = this.props.column.contentList.map((contentItem, index) => {
      var propsData = {
        value: contentItem.value,
        contentItem: contentItem,
        contentIndex: index,
        onRemove: this.removeContent.bind(this, index),
        onChange: this.updateContent.bind(this, index),
        imageSize: 'small',
        settings: contentItem.settings,
        onSettingsSave: this.onSettingsSave.bind(this)
      };
      var fieldPropsData = _.extend(propsData, this.props);

      var gridRowLayoutProps = _.extend({
        contentItem: contentItem,
        contentIndex: index,
        isListGridTemplate: true
      }, self.props);

      return(
        <div key={index} className="List-Grid-Group-Column-Content-Item">
          <GridRowLayout {...gridRowLayoutProps}>
            <Field {...fieldPropsData} />
          </GridRowLayout>
        </div>
      );
    });

    return (
      <div>
        <div>
          <div className={!this.props.isEdit ? "hidden" : ""}>
            <WidgetSelectList {...widgetListPropsData} />
          </div>

          <div className='list-grid-column-content-container'>
            {nodes}
          </div>
        </div>
      </div>
    );
  }
}

export default ListGridGroupColumn;
