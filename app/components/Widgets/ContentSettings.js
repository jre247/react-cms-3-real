import React from 'react';
import Modal from './Components/Modal';
import LookupStore from '../../stores/LookupStore';
import {_} from 'underscore';
var self;

class ContentSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {settings: {}, showModal: false};
    this.lookupState = LookupStore.getState();
    this.onChange = this.onChange.bind(this);
    self = this;
  }

  componentDidMount() {
    LookupStore.listen(this.onChange);
    self.setState({settings: self.props.settings || {}});
  }

  componentWillReceiveProps(newProps){
    self.setState({settings: newProps.settings || {}});
  }

  componentWillUnmount() {
    LookupStore.unlisten(this.onChange);
  }

  closeModal() {
    self.setState({showModal: false});
  }

  openModal(contentItem, event) {
    debugger;
    var settings = self.props.contentSettings[contentItem.id];
    self.setState({showModal: true, settings: settings});
  }

  onChange(state) {
    self.setState(state);
  }

  onSettingChange(index, event){
    var setting = self.lookupState.lookups.settings[index];
    var settingValue = event.target.value;

    self.state.settings[setting.id] = settingValue;
    self.setState({settings: self.state.settings});
  }

  onSave(){
    self.props.onSettingsSave(self.state.settings, self.props.contentItem.id);
  }

  render() {
    var modalProps = _.extend({modalElement: '#settingsModal', showModal: self.state.showModal,
      closeModal: this.closeModal.bind(this)}, this.props);

    let settingNodes = self.lookupState.lookups.settings.map((setting, index) => {
      var settingValue = self.state.settings[setting.id];
      return (
        <div key={index}>
          <div className="form-group">
              <label>{setting.name}</label>
              <input type="text" className="form-control" name={setting.name} value={settingValue}
                onChange={self.onSettingChange.bind(self, index)} />
          </div>
        </div>
      );
    });

    return (
      <div className="content-settings-container">
        <div className="widget-settings-container">
          <div onClick={self.openModal.bind(this, this.props.contentItem)}>
            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
          </div>
        </div>

        <Modal {...modalProps}>
          <div id="settingsModal" className="col-sm-6 col-sm-offset-2">
            <div className="modal-content-area">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" onClick={self.closeModal.bind(this)}>&times;</button>
                </div>
                <div className="body">
                  Settings
                  {settingNodes}

                  <button className="btn btn-warning btn-lg" onClick={self.onSave.bind(this)}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ContentSettings;
