import React from 'react';
import Modal from '../Modal';
import LookupStore from '../../../../stores/LookupStore';
import {_} from 'underscore';
var self;

class ContentSettingsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {settings: {}, contentGroupIndex: null, showModal: false, contentItem: {}, contentIndex: null};
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
    debugger;
    self.isSaving = false;
    var contentItem = _.clone(this.props.contentItem);
    var contentIndex = _.clone(this.props.contentIndex);
    var contentGroupIndex = _.clone(this.props.contentGroupIndex);

    var settings = _.clone(this.props.settings);

    self.setState({showModal: true, contentGroupIndex: contentGroupIndex, contentItem: contentItem,
      settings: settings || {}, contentIndex: contentIndex});
  }

  onChange(state) {
    self.setState(state);
  }

  onSettingChange(index, event){
    var settingsLookups = self.lookupState.lookups.settings;
    var setting = _.clone(settingsLookups[index]);
    setting.setting_value = event.target.value;
    setting.setting_id = setting.id;

    self.state.settings[setting.id] = setting;
    self.setState({settings: self.state.settings});
  }

  onSave(){
    self.setState({showModal: false});
    self.isSaving = true;

    var contentItem = self.state.contentItem;
    contentItem.settings = self.state.settings;

    self.props.onSettingsSave(contentItem, self.state.contentIndex, self.state.contentGroupIndex);
  }

  render() {
    var showModal = self.state.showModal && !self.isSaving;

    var modalProps = _.extend({modalElement: '.settingsModal', showModal: showModal,
      closeModal: this.closeModal.bind(this)}, this.props);

    var settingsLookups = _.clone(self.lookupState.lookups.settings);

    let settingNodes = settingsLookups.map((settingLookup, index) => {
      var setting = self.state.settings[settingLookup.id];

      var settingName = settingLookup.name;
      var settingValue;

      if(setting){
        settingValue = setting.setting_value;
      }

      return (
        <div key={index}>
          <div className="form-group">
              <label>{settingName}</label>
              <input type="text" className="form-control setting-input" name={settingName} value={settingValue}
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

export default ContentSettingsEdit;
