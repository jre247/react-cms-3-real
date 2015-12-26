import {_} from 'underscore';
import FieldEdit from './FieldEdit';
import FieldReadOnly from './FieldReadOnly';

class Field {
  constructor() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(this.props.isEdit){
      return (
        <FieldEdit {...this.props} />
      );
    }
    else{
      return (
        <FieldeReadOnly {...this.props} />
      );
    }
  }

}

export default Field;
