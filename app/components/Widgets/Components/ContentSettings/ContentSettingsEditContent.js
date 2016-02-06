import React from 'react';
import {_} from 'underscore';
import ContentSettingsPreview from './ContentSettingsPreview';
var self;

class ContentSettingsEditContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: null,
      spacingLeft: null,
      spacingRight: null,
      spacingAbove: null,
      spacingBelow: null,
      fontColor: null,
      backgroundColor: null,
      width: null,
      height: null,
      lineHeight: null
    };

    self = this;
  }

  componentDidMount() {
    this.setupFontSize();
    this.setupSpacingBelow();
    this.setupSpacingAbove();
    this.setupSpacingRight();
    this.setupSpacingLeft();
    this.setupFontColor();
    this.setupBackgroundColor();
    this.setupWidth();
    this.setupHeight();
    this.setupLineHeight();
  }

  setupFontSize(){
    var lookup = this.props.settingsLookups[0];
    var setting = self.props.settingsToEdit[lookup.id];
    if(setting){
      var settingValue = setting.setting_value;
      this.setState({fontSize: settingValue});
    }
  }

  setupSpacingBelow(){
    var lookup = this.props.settingsLookups[1];
    var setting = self.props.settingsToEdit[lookup.id];
    if(setting){
      var settingValue = setting.setting_value;
      this.setState({spacingBelow: settingValue});
    }
  }

  setupSpacingAbove(){
    var lookup = this.props.settingsLookups[2];
    var setting = self.props.settingsToEdit[lookup.id];
    if(setting){
      var settingValue = setting.setting_value;
      this.setState({spacingAbove: settingValue});
    }
  }

  setupSpacingRight(){
    var lookup = this.props.settingsLookups[3];
    var setting = self.props.settingsToEdit[lookup.id];
    if(setting){
      var settingValue = setting.setting_value;
      this.setState({spacingRight: settingValue});
    }
  }

  setupSpacingLeft(){
    var lookup = this.props.settingsLookups[4];
    var setting = self.props.settingsToEdit[lookup.id];
    if(setting){
      var settingValue = setting.setting_value;
      this.setState({spacingLeft: settingValue});
    }
  }

  setupFontColor(){
    var lookup = this.props.settingsLookups[5];
    var setting = self.props.settingsToEdit[lookup.id];
    if(setting){
      var settingValue = setting.setting_value;
      this.setState({fontColor: settingValue});
    }
  }

  setupBackgroundColor(){
    var lookup = this.props.settingsLookups[6];
    var setting = self.props.settingsToEdit[lookup.id];
    if(setting){
      var settingValue = setting.setting_value;
      this.setState({backgroundColor: settingValue});
    }
  }

  setupWidth(){
    var lookup = this.props.settingsLookups[7];
    var setting = self.props.settingsToEdit[lookup.id];
    if(setting){
      var settingValue = setting.setting_value;
      this.setState({width: settingValue});
    }
  }

  setupHeight(){
    var lookup = this.props.settingsLookups[8];
    var setting = self.props.settingsToEdit[lookup.id];
    if(setting){
      var settingValue = setting.setting_value;
      this.setState({height: settingValue});
    }
  }

  setupLineHeight(){
    var lookup = this.props.settingsLookups[9];
    var setting = self.props.settingsToEdit[lookup.id];
    if(setting){
      var settingValue = setting.setting_value;
      this.setState({lineHeight: settingValue});
    }
  }

  componentWillReceiveProps(newProps){

  }

  componentWillUnmount() {

  }

  onFontSizeChange(event){
    var settingValue = event.target.value;

    self.setState({fontSize: settingValue});

    var settingsLookups = self.props.settingsLookups;
    var setting = _.clone(settingsLookups[0]);
    setting.setting_value = settingValue;
    setting.setting_id = setting.id;

    self.props.updateSettingsForContent(setting);
  }

  onSpacingBelowChange(event){
    var settingValue = event.target.value;

    self.setState({spacingBelow: settingValue});

    var settingsLookups = self.props.settingsLookups;
    var setting = _.clone(settingsLookups[1]);
    setting.setting_value = settingValue;
    setting.setting_id = setting.id;

    self.props.updateSettingsForContent(setting);
  }

  onSpacingAboveChange(event){
    var settingValue = event.target.value;

    self.setState({spacingAbove: settingValue});

    var settingsLookups = self.props.settingsLookups;
    var setting = _.clone(settingsLookups[2]);
    setting.setting_value = settingValue;
    setting.setting_id = setting.id;

    self.props.updateSettingsForContent(setting);
  }

  onSpacingRightChange(event){
    var settingValue = event.target.value;

    self.setState({spacingRight: settingValue});

    var settingsLookups = self.props.settingsLookups;
    var setting = _.clone(settingsLookups[3]);
    setting.setting_value = settingValue;
    setting.setting_id = setting.id;

    self.props.updateSettingsForContent(setting);
  }

  onSpacingLeftChange(event){
    var settingValue = event.target.value;

    self.setState({spacingLeft: settingValue});

    var settingsLookups = self.props.settingsLookups;
    var setting = _.clone(settingsLookups[4]);
    setting.setting_value = settingValue;
    setting.setting_id = setting.id;

    self.props.updateSettingsForContent(setting);
  }

  onFontColorChange(event){
    var settingValue = event.target.value;

    self.setState({fontColor: settingValue});

    var settingsLookups = self.props.settingsLookups;
    var setting = _.clone(settingsLookups[5]);
    setting.setting_value = settingValue;
    setting.setting_id = setting.id;

    self.props.updateSettingsForContent(setting);
  }

  onBackgroundColorChange(event){
    var settingValue = event.target.value;

    self.setState({backgroundColor: settingValue});

    var settingsLookups = self.props.settingsLookups;
    var setting = _.clone(settingsLookups[6]);
    setting.setting_value = settingValue;
    setting.setting_id = setting.id;

    self.props.updateSettingsForContent(setting);
  }

  onWidthChange(event){
    var settingValue = event.target.value;

    this.setNewWidth(settingValue);
  }

  setNewWidth(settingValue, valueFromPreview){
    self.setState({width: settingValue});

    var settingsLookups = self.props.settingsLookups;
    var setting = _.clone(settingsLookups[7]);
    setting.setting_value = settingValue;
    setting.setting_id = setting.id;

    if(valueFromPreview){
      self.props.updateSettingsForContentPreview(setting);
    }
    else{
      self.props.updateSettingsForContent(setting);
    }
  }

  onHeightChange(event){
    var settingValue = event.target.value;

    this.setNewHeight(settingValue);
  }

  setNewHeight(settingValue){
    self.setState({height: settingValue});

    var settingsLookups = self.props.settingsLookups;
    var setting = _.clone(settingsLookups[8]);
    setting.setting_value = settingValue;
    setting.setting_id = setting.id;

    self.props.updateSettingsForContent(setting);
  }

  onLineHeightChange(event){
    var settingValue = event.target.value;

    self.setState({lineHeight: settingValue});

    var settingsLookups = self.props.settingsLookups;
    var setting = _.clone(settingsLookups[9]);
    setting.setting_value = settingValue;
    setting.setting_id = setting.id;

    self.props.updateSettingsForContent(setting);
  }

  render() {
    var previewProps = _.extend({
        setNewHeight: this.setNewHeight.bind(this),
        setNewWidth: this.setNewWidth.bind(this),
    }, this.props);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="setting-spacings">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                      <label>Spacing Below</label>
                      <input type="text" className="form-control setting-input" value={this.state.spacingBelow}
                        onChange={self.onSpacingBelowChange.bind(self)} />
                  </div>
                  <div className="form-group">
                      <label>Spacing Above</label>
                      <input type="text" className="form-control setting-input" value={this.state.spacingAbove}
                        onChange={self.onSpacingAboveChange.bind(self)} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                      <label>Spacing Right</label>
                      <input type="text" className="form-control setting-input" value={this.state.spacingRight}
                        onChange={self.onSpacingRightChange.bind(self)} />
                  </div>
                  <div className="form-group">
                      <label>Spacing Left</label>
                      <input type="text" className="form-control setting-input" value={this.state.spacingLeft}
                        onChange={self.onSpacingLeftChange.bind(self)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="setting-sizes">
              <div className="col-md-4">
                <div className="form-group">
                    <label>Font Size</label>
                    <div className="setting-font-size">
                      <input type="text" className="form-control setting-input" value={this.state.fontSize}
                        onChange={self.onFontSizeChange.bind(self)} />
                    </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                    <label>Line Height</label>
                    <div className="setting-line-height">
                      <input type="text" className="form-control setting-input" value={this.state.lineHeight}
                        onChange={self.onLineHeightChange.bind(self)} />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="setting-colors">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                      <label>Font Color</label>
                      <input type="text" className="form-control setting-input" value={this.state.fontColor}
                        onChange={self.onFontColorChange.bind(self)} />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                      <label>Background Color</label>
                      <input type="text" className="form-control setting-input" value={this.state.backgroundColor}
                        onChange={self.onBackgroundColorChange.bind(self)} />
                  </div>
                </div>
              </div>

              <div className="setting-dimensions">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                        <label>Width</label>
                        <input type="text" className="form-control setting-input" value={this.state.width}
                          onChange={self.onWidthChange.bind(self)} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                        <label>Height</label>
                        <input type="text" className="form-control setting-input" value={this.state.height}
                          onChange={self.onHeightChange.bind(self)} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="save-btn">
                      <button className="btn btn-warning btn-lg" onClick={self.props.onSave.bind(this)}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <ContentSettingsPreview {...previewProps} />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentSettingsEditContent;
