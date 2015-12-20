import React from 'react';
import {Link} from 'react-router';

class ParentListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div key={this.props.listItem.sort_order} className={this.props.listItem.sort_order > 1 ?
      'List-item-group Row-separator' : 'List-item-group'}>
        <div className='row'>
          <div className='col-sm-6'>
            <div className="form-group Thing-to-do-title" >
              <span ref="description" name="description">
                {this.props.listItem.value}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParentListItem;
