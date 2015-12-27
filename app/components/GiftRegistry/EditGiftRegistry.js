import React from 'react';
import GiftRegistryStore from '../../stores/GiftRegistryStore';
import GiftRegistryActions from '../../actions/GiftRegistryActions';
import {_} from 'underscore';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';

class EditGiftRegistry extends React.Component {
  constructor(props) {
    super(props);
    this.state = GiftRegistryStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    GiftRegistryStore.listen(this.onChange);
    GiftRegistryActions.getContentListData();
  }
  componentWillUnmount() {
    GiftRegistryStore.unlisten(this.onChange);
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  setStateForContentList(){
    this.setState({contentList: this.state.contentList})
  }

  submit(event){
    GiftRegistryActions.saveContentListData(this.state.contentList, this.props.history);
  }


  render() {
    var propsData = {isEdit: true, contentList: this.state.contentList, editLink: '/gift-registry/edit',
       setStateForContentList: this.setStateForContentList.bind(this)};

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='container List-page'>
            <div className='row List-container'>
              <ListTemplate {...propsData} />
            </div>

            <div className={this.state.contentList.length > 0 ? 'form-group' : 'form-group hidden'}>
              <button type='submit' onClick={this.submit.bind(this)} className='btn btn-primary'>Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditGiftRegistry;
