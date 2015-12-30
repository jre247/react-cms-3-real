import React from 'react';
import {Link} from 'react-router';
import WidgetFactory from './WidgetFactory';

class WidgetSelectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedWidget: 'longDescription'};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onWidgetListChange(event){
    this.setState({selectedWidget: event.target.value});
  }

  onAddWidget(event){
    var selectedWidget = this.state.selectedWidget;
    var parentIndex = this.props.parentIndex;
    var factory = new WidgetFactory(selectedWidget, null, '', '', this.props.templateId, parentIndex);
    var factoryInstance = factory.create();

    this.props.onAddWidgetToContentList(factoryInstance);
  }

  render() {
    return (

      <div className='row'>
        <div className='col-sm-3'>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.onAddWidget.bind(this)}>
              Add Widget
            </button>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className="form-group">
            <div onChange={this.onWidgetListChange.bind(this)}>
              <select className='form-control'>
                <option value="longDescription">Long Description</option>
                <option value="shortDescription">Short Description</option>
                <option value="title">Title</option>
                <option value="iframe">Iframe</option>
                <option value="image">Image</option>
                <option value="link">link</option>
              </select>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default WidgetSelectList;
