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

  onAddWidgetToContentList(factoryInstance){
    debugger;
    var column = this.props.column;
    var contentListLength = column.contentList.length;
    this.props.column.contentList.splice(contentListLength + 1, 0, factoryInstance);

    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentGroupList();
  }

  render() {
    var widgetListPropsData = {onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
      parentIndex: this.props.contentGroupIndex, templateId: this.templateId};

    let nodes = this.props.column.contentList.map((contentItem, index) => {
      var propsData = _.extend({value: contentItem.value, contentItem: contentItem }, this.props);

      return(
        <div key={index} className="List-Grid-Group-Column-Content-Item">
          <Field {...propsData} />
        </div>
      );
    });

    return (
      <div>
        <div>
          <WidgetSelectList {...widgetListPropsData} />

          <div className='row Sub-list-item'>
            {nodes}
          </div>
        </div>
      </div>
    );
  }
}

export default ListGridGroupColumn;
