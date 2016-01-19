import React from 'react';
import {_} from 'underscore';
import AppSettingStore from '../../stores/AppSettingStore';
import AppSettingActions from '../../actions/AppSettingActions';
import API from '../../API';
var self;

class AppSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {appSetting: {}};
    this.appSettingState = AppSettingStore.getState();
    this.onChange = this.onChange.bind(this);
    self = this;
  }

  componentDidMount() {
    AppSettingStore.listen(this.onChange);
    this.getAppSetting();
  }
  componentWillUnmount() {
    AppSettingStore.unlisten(this.onChange);
  }
  onChange(state) {
    self.setState(state);
  }
  getAppSetting(){
    var appSettings = this.appSettingState.appSettings;
    if(appSettings){
      var appSetting = _.findWhere(appSettings, {id: parseInt(this.props.params.id)});
      if(appSetting){
        self.setState({appSetting: appSetting});
      }
    }
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    API.saveAppSetting(this.state.appSetting).then(function(){
      self.props.history.pushState(null, '/admin/app-settings');
    })
  }

  onNameChange(event){
    this.state.appSetting.name = event.target.value;
    this.setState({appSetting: this.state.appSetting});
  }

  onValueChange(event){
    this.state.appSetting.value = event.target.value;
    this.setState({appSetting: this.state.appSetting});
  }

  render() {
    return(
      <div className='Content-panel'>
        <div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" value={this.state.appSetting.name}
                  onChange={this.onNameChange.bind(this)} />
            </div>

            <div className="form-group">
                <label>Value</label>
                <input type="text" className="form-control" name="admin" value={this.state.appSetting.value}
                  onChange={this.onValueChange.bind(this)} />
            </div>

            <button type="button" className="btn btn-primary btn-lg" onClick={this.submit.bind(this)}>Save</button>
        </div>
      </div>
    );

  }
}

export default AppSetting;
