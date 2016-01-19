import React from 'react';
import {_} from 'underscore';
import AppSettingStore from '../../stores/AppSettingStore';
import AppSettingActions from '../../actions/AppSettingActions';
import { createHistory } from 'history'
var self;

class AppSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppSettingStore.getState();
    this.onChange = this.onChange.bind(this);
    self = this;
  }

  componentDidMount() {
    AppSettingStore.listen(this.onChange);
  }
  componentWillUnmount() {
    AppSettingStore.unlisten(this.onChange);
  }
  onChange(state) {
    self.setState(state);
  }
  selectAppSetting(setting, event){
    self.props.history.pushState(null, '/admin/app-settings/' + setting.id + '/edit');
  }

  render() {
    if(this.state.appSettings.length == 0){
      return(
        <span />
      );
    }
    else{
      let nodes = this.state.appSettings.map((setting, index) => {
        return (
          <tr key={index} onClick={this.selectAppSetting.bind(this, setting)}>
            <td>{setting.name}</td>
            <td>{setting.value}</td>
          </tr>
        );
      });

      return (
        <div className='Content-panel'>
          <div>
            <div className="table-responsive">
              <table className="table app-settings">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {nodes}
              </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AppSettings;
