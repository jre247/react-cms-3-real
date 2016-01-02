import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';

class ParentListGridItemReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    var propsData = _.extend({value: this.props.contentItem.value }, this.props);

    return (
      <div key={this.props.contentItem.sort_order} className={this.props.contentGroupItem.parentListItem.sort_order > 1 ?
        'List-item-group Row-separator' : 'List-item-group'}>
          <div className='row'>
            <div>
              <div className="form-group Parent-list-item-readonly" >
                <Field {...propsData} />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ParentListGridItemReadOnly;
