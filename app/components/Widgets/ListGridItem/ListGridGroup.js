import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../../Templates/TemplateHelper';
import WidgetSelectList from '../../Widgets/WidgetSelectList';
import ParentListGridItem from '../../Widgets/ListGridItem/ParentListGridItem';
import ListGridGroupRow from '../../Widgets/ListGridItem/ListGridGroupRow';

class ListGridGroup extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = this.props.templateId;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onAddRow(){
    var contentGroupItem = this.props.contentGroupItem;
    var newRow = {columns: []};
    var column = {contentList: []};
    var column2 = {contentList: []};
    newRow.columns.push(column);
    newRow.columns.push(column2);
    contentGroupItem.rows.push(newRow);

    this.props.setStateForContentGroupList();
  }


  render() {
    var parentListItem = this.props.contentGroupItem.parentListItem;
    var propsData = {
      contentItem: parentListItem
    };
    var parentListGridItemProps = _.extend(propsData, this.props);

    let nodes = this.props.contentGroupItem.rows.map((row, index) => {
      var propsData = {
        row: row
      };
      var rowProps = _.extend(propsData, this.props);

      return(
        <div key={index}>
          <ListGridGroupRow {...rowProps} />
        </div>
      );
    });

    return (
      <div>
        <div className='List-template'>
          <div className={!this.props.isEdit ? "Edit-Content-Button" : "hidden"}>
            <Link className="Navigation-link" to={this.props.editLink}>Edit</Link>
          </div>

          <div className={!this.props.isEdit ? "hidden" : ""}>
            <button className="btn btn-primary" onClick={this.onAddRow.bind(this)}>Add Row</button>
          </div>

          <div>
            <ParentListGridItem {...parentListGridItemProps} />
          </div>

          <div className='row'>
            {nodes}
          </div>
        </div>
      </div>
    );
  }
}

export default ListGridGroup;
