import {_} from 'underscore';

class PropsHelper {
  constructor() {

  }

  static convertPropsToArray(props){
    var propsArray = [];

    _.each(props, function(prop){
      propsArray.push(prop);
    });

    return propsArray;
  }
}

export default PropsHelper;
