import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import WidgetSelectList from '../../Widgets/WidgetSelectList';

class ParentListGridItemEdit extends React.Component {
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
    var propsData = _.extend({value: this.props.contentGroupItem.parentListItem.value }, this.props);

    return (
      <div key={this.props.contentItem.sort_order} className='container List-item-group'>
        <div className='row'>
          <div className='col-sm-6 col-md-offset-2'>
            <div className="form-group">
              <Field {...propsData} />
            </div>
          </div>
          <div className={!this.props.isEdit ? "hidden" : "col-sm-2"}>
            <button className="btn btn-primary" onClick={this.onAddRow.bind(this)}>Add Row</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ParentListGridItemEdit;
