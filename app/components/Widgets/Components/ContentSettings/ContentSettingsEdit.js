import React from 'react';
import Modal from '../Modal';
import LookupStore from '../../../../stores/LookupStore';
import {_} from 'underscore';
import ContentSettingsEditContent from './ContentSettingsEditContent';
var self;

class ContentSettingsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {settings: {}, contentGroupIndex: null, showModal: false, contentItem: {}, contentIndex: null, isPreviewingContent: false};
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
    self.setState({showModal: false, isPreviewingContent: false});
  }

  openModal(contentItem, event) {
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

  onSave(){
    self.setState({showModal: false});
    self.isSaving = true;

    var contentItem = self.state.contentItem;
    contentItem.settings = self.state.settings;

    self.props.onSettingsSave(contentItem, self.state.contentIndex, self.state.contentGroupIndex);
  }

  shouldComponentUpdate(){
    if(this.state.isPreviewingContent){
      debugger;
      return false;
    }
    else{
      return true;
    }
  }

  updateSettingsForContent(setting){
    var settings = self.state.settings;
    settings[setting.id] = setting;
    self.setState({settings: settings, isPreviewingContent: false});
  }

  updateSettingsForContentPreview(setting){
    var settings = self.state.settings;
    settings[setting.id] = setting;

    // I want to suppress react from re-rendering if an image is in preview mode because
    // the Resizable widget would trigger a re-render for every pixel resize, which bogs down the browser
    self.setState({settings: settings, isPreviewingContent: true});
  }

  render() {
    var showModal = self.state.showModal && !self.isSaving;

    var modalProps = _.extend({modalElement: '.settingsModal', showModal: showModal, isTransparent: false,
      closeModal: this.closeModal.bind(this)}, this.props);

    var settingsLookups = _.clone(self.lookupState.lookups.settings);

    var propsData = _.extend({
      settingsToEdit: this.state.settings,
      settingsLookups: settingsLookups,
      updateSettingsForContent: this.updateSettingsForContent.bind(this),
      updateSettingsForContentPreview: this.updateSettingsForContentPreview.bind(this),
      contentItemPreview: self.state.contentItem,
      onSave: this.onSave.bind(this)
    }, this.props);

    return (
      <div className="content-settings-container">
        <div className="widget-settings-container">
          <div onClick={self.openModal.bind(this, this.props.contentItem)}>
            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
          </div>
        </div>

        <Modal {...modalProps}>
          <div className="settingsModal">
            <div className="modal-content-area">
              <div className="modal-content modal-form">
                <div className="modal-header">
                  Settings
                  <button type="button" className="close" onClick={self.closeModal.bind(this)}>&times;</button>
                </div>
                <div className="body">
                  <div className="col-md-12">

                    <ContentSettingsEditContent {...propsData} />
                  </div>
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
