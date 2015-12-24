import React from 'react';
import {Link} from 'react-router';

class ParentListItemEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div key={this.props.listItem.sort_order} className='container List-item-group'>
        <div className='row'>
          <div className='col-sm-8 Add-sub-list-item'>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.props.onAddSubListItem}>Add Sub List Item</button>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-8'>
            <div className="form-group">
              <input ref="title" className='form-control' name="title" placeholder="Title"
                value={this.props.listItem.value} onChange={this.props.onChange}/>
            </div>
          </div>
          <div className="col-sm-2">
            <div onClick={this.props.onRemove}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParentListItemEdit;
