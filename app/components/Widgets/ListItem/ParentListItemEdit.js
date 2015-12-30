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
    this.props.setStateForContentList();
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
    var widgetListPropsData = {onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
      parentIndex: this.props.index, templateId: this.templateId};

    return (
      <div key={this.props.contentItem.sort_order} className='container List-item-group'>
        <WidgetSelectList {...widgetListPropsData} />

        <div className='row'>
          <div className='col-sm-8'>
            <div className="form-group">
              <Field {...propsData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParentListItemEdit;
