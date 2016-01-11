import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../../Templates/TemplateHelper';
import WidgetSelectList from '../../Widgets/WidgetSelectList';

class ParentListItemEdit extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = this.props.templateId;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onAddWidgetToContentList(factoryInstance){
    this.props.contentList.splice(this.getIndexForNewChild(this.props.index), 0, factoryInstance);
    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentList(this.props.contentList);
  }

  getIndexForNewChild(parentIndex){
    var lastChildIndexForParent = this.findLastChildIndexForParent(parentIndex);
    return lastChildIndexForParent + 1;
  }
  findLastChildIndexForParent(parentIndex){
    var lastChildIndex = parentIndex;
    for(var i = parentIndex + 1; i < this.props.contentList.length; i++){
      var listItemCompare = this.props.contentList[i];
      if(FieldHelper.isParentListItem(listItemCompare)){
        break;
      }
      if(listItemCompare.parent_index === parentIndex){
        lastChildIndex = i;
      }
    };

    return lastChildIndex;
  }

  render() {
    var propsData = _.extend({value: this.props.contentItem.value }, this.props);
    var column_number = 1;
    var row_number = this.props.index;
    var widgetListPropsData = {onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
      parentIndex: this.props.index, templateId: this.templateId, row_number, column_number};

    return (
      <div>
        <div key={this.props.contentItem.sort_order} className={this.props.contentItem.sort_order > 1 ?
        'List-item-group Row-separator' : 'List-item-group'}>
          <div className="Sub-list-item-widget-select-area">
            <WidgetSelectList {...widgetListPropsData} />
          </div>
          <div className='row'>
            <div className='col-sm-6 col-md-offset-2'>
              <div className="form-group">
                <Field {...propsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParentListItemEdit;
