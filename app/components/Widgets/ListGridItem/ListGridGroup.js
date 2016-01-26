import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../../Templates/TemplateHelper';
import WidgetSelectList from '../../Widgets/WidgetSelectList';
import ParentListGridItem from '../../Widgets/ListGridItem/ParentListGridItem';
import ListGridGroupRow from '../../Widgets/ListGridItem/ListGridGroupRow';
var self;

class ListGridGroup extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = this.props.templateId;
    self = this;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  updateContent(event) {
    this.props.contentGroupItem.parentListItem.value = event.target.value;
    this.props.setStateForContentGroupList();
  }

  removeContent(event){
    this.props.contentGroupList.splice(this.props.contentGroupIndex, 1);

    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentList();
  }

  render() {
    var parentListItem = this.props.contentGroupItem.parentListItem;
    var propsData = {
      contentItem: parentListItem,
      onRemove: this.removeContent.bind(this),
      onChange: this.updateContent.bind(this),
      row_number: 1,
      column_number: 1
    };
    var parentListGridItemProps = _.extend(propsData, this.props);

    let nodes = this.props.contentGroupItem.rows.map((row, index) => {
      var propsData = {
        row: row,
        row_number: index,
      };
      var rowProps = _.extend(propsData, this.props);

      return(
        <div key={index} className={!this.props.isEdit ? 'Read-Only' : ''}>
          <ListGridGroupRow {...rowProps} />
        </div>
      );
    });

    return (
      <div>
        <div className='List-template'>
          <div>
            <ParentListGridItem {...parentListGridItemProps} />
          </div>

          <div className='Sub-List-Items'>
            {nodes}
          </div>
        </div>
      </div>
    );
  }
}

export default ListGridGroup;
