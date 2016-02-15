import React from 'react';
import {Link} from 'react-router';
import WidgetInstanceFactory from './WidgetInstanceFactory';

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
    var factory = new WidgetInstanceFactory(selectedWidget, null, '', '', this.props.templateId, parentIndex,
      this.props.row_number, this.props.column_number);
    var factoryInstance = factory.create();

    this.props.onAddWidgetToContentList(factoryInstance);
  }

  render() {
    return (

      <div>
        <div className='Widget-Select-Input'>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.onAddWidget.bind(this)}>
              Add Widget
            </button>
          </div>
        </div>
        <div className='Widget-Select-Input'>
          <div className="form-group">
            <div onChange={this.onWidgetListChange.bind(this)}>
              <select className='form-control'>
                <option value="longDescription">Long Description</option>
                <option value="shortDescription">Short Description</option>
                <option value="title">Title</option>
                <option value="iframe">Iframe</option>
                <option value="image">Image Url</option>
                <option value="imageUpload">Image Upload</option>
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
