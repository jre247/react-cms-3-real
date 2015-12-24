import React from 'react';
import {Link} from 'react-router';
import LongDescription from '../LongDescription/LongDescription';
import Url from '../Url/Url';

class SubListItemReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  //TODO: put in helper
  isDescription(node){
    return node.content_type_id == 2;
  }

  render() {
    var propsData = {isEdit: this.props.isEdit, value: this.props.listItem.value};
    if(this.isDescription(this.props.listItem)){
      return (
        <div key={this.props.listItem.sort_order}>
          <div className='row'>
            <div className='col-sm-8'>
              <div className="form-group Sub-list-item">
                <LongDescription {...propsData} />
              </div>
            </div>
          </div>
        </div>
      );
    }
    else{
      return (
        <div key={this.props.listItem.sort_order} className='Link-list-item'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className="form-group">
                <div className="Sub-list-item">
                  <Url {...propsData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

export default SubListItemReadOnly;
