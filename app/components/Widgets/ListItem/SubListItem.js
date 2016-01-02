import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';

class SubListItem extends React.Component {
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
      <div key={this.props.contentItem.sort_order}>
        <div className='row'>
          <div className='col-sm-8 col-md-offset-2'>
            <div className="form-group Sub-list-item">
              <Field {...propsData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubListItem;
