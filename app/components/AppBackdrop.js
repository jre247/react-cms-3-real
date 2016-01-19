import React from 'react';
import AppSettingStore from '../stores/AppSettingStore';
import AppSettingActions from '../actions/AppSettingActions';

class AppBackdrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppSettingStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    AppSettingStore.listen(this.onChange);
    AppSettingActions.getAppSettings();
  }

  componentWillUnmount() {
    AppSettingStore.unlisten(this.onChange);
  }


  render() {
    var backgroundImageUrl = this.state.appSettingsDictionary["AppBackgroundImage"];

    var divStyle = {
      backgroundImage: 'url(' + backgroundImageUrl + ')'
    };

    return (
        <div className="Backdrop">
          <div className="fixed-container" style={divStyle}>
          </div>
        </div>
    );
  }
}

export default AppBackdrop;
