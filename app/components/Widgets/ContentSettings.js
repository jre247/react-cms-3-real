import React from 'react';
import Modal from './Components/Modal';
import LookupStore from '../../stores/LookupStore';
import {_} from 'underscore';
var self;

class ContentSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {settings: {}, showModal: false, contentItem: {}};
    this.lookupState = LookupStore.getState();
    this.onChange = this.onChange.bind(this);
    this.isSaving = false;
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
    self.isSaving = false;
    var settings = self.props.contentSettings[contentItem.id];
    self.setState({showModal: true, contentItem: contentItem, settings: settings || {}});
  }

  onChange(state) {
    self.setState(state);
  }

  onSettingChange(index, event){
    debugger;
    var setting = self.lookupState.lookups.settings[index];
    setting.value = event.target.value;

    self.state.settings[setting.id] = setting;
    self.setState({settings: self.state.settings});
  }

  onSave(){
    self.setState({showModal: false});
    self.isSaving = true;

    self.props.onSettingsSave(self.state.settings, self.state.contentItem.id);
  }

  render() {
    var showModal = self.state.showModal && !self.isSaving;

    var modalProps = _.extend({modalElement: '.settingsModal', showModal: showModal,
      closeModal: this.closeModal.bind(this)}, this.props);

    let settingNodes = self.lookupState.lookups.settings.map((settingLookup, index) => {
      debugger;
      var setting = self.props.settings[settingLookup.id];

      var settingName = settingLookup.name;
      var settingValue;

      if(setting){
        settingValue = setting.setting_value;
      }

      return (
        <div key={index}>
          <div className="form-group">
              <label>{settingName}</label>
              <input type="text" className="form-control" name={settingName} value={settingValue}
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
          <div className="col-sm-6 col-sm-offset-2 settingsModal">
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
