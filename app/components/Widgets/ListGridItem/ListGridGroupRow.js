import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../../../helpers/TemplateHelper';
import WidgetSelectList from '../../Widgets/WidgetSelectList';

class ListGridGroupRow extends React.Component {
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
    var propsData = {
      contentItem: this.props.contentGroupItem.parentListItem
    };

    let nodes = this.props.row.columns.map((column, index) => {
      var propsData = {
        column: column
      };
      var columnProps = _.extend(propsData, this.props);

      return(
        <div key={index} className="List-Grid-Group-Column">
          <ListGridGroupColumn {...columnProps} />
        </div>
      );
    });

    return (
      <div>
        <div className='Content-panel List-template'>
          <div className={!this.props.isEdit ? "Edit-Content-Button" : "hidden"}>
            <Link className="Navigation-link" to={this.props.editLink}>Edit</Link>
          </div>

          <div className='row List-page Sub-list-item'>
            {nodes}
          </div>
        </div>
      </div>
    );
  }
}

export default ListGridGroupRow;
