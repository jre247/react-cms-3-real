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

  render() {
    var propsData = _.extend({value: this.props.contentGroupItem.parentListItem.value }, this.props);

    return (
      <div key={this.props.contentItem.sort_order} className='container List-item-group'>
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

export default ParentListGridItemEdit;
