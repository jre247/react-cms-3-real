import React from 'react';
import Modal from '../Components/Modal';
import LookupStore from '../../stores/LookupStore';
var self;

class ContentSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, contentSettings: {}};
    this.lookupState = LookupStore.getState();
    this.onChange = this.onChange.bind(this);
    self = this;
  }

  componentDidMount() {
    LookupStore.listen(this.onChange);
  }

  componentWillUnmount() {
    LookupStore.unlisten(this.onChange);
  }

  onChange(state) {
    self.setState(state);
  }

  closeModal() {
    self.setState({showModal: false});
  }

  openModal() {
    self.setState({showModal: true});
  }

  onSettingChange(event, index){
    var setting = self.lookupState.lookups.settings[index];
    var settingValue = event.target.value;

    this.state.contentSettings[setting.id] = settingValue;
    self.setState({contentSettings: this.state.contentSettings});
  }

  onSave(){
    self.props.onSettingsSave(self.state.contentSettings);
  }

  render() {
    var modalProps = {modalElement: '#settingsModal', showModal: this.state.showModal};

    let settingNodes = self.lookupState.lookups.settings.map((setting, index) => {
      return (
        <div>
          <div className="form-group">
              <label>{setting.name}</label>
              <input type="text" className="form-control" name={setting.name}
                onChange={this.bind.onSettingChange(this, index)} />
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="widget-settings-container">
          <div onClick={this.openModal}>
            <a>Settings</a>
          </div>
        </div>

        <button className="btn btn-warning btn-lg" onClick={this.onSave.bind(this)}>Save</button>

        <Modal {...modalProps}>
          <div id="settingsModal">
            <div className="modal-content-area">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" onClick={this.closeModal.bind(this)}>&times;</button>
                </div>
                <div className="body">
                  Settings
                  {settingNodes}
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
