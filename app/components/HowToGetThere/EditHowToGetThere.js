import React from 'react';
import {_} from 'underscore';
import ListTemplate from '../Templates/ListTemplate/ListTemplate';
import API from '../../API';

class EditHowToGetThere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contentList: []};
    this.pageId = 6;
  }

  componentDidMount() {
    var self = this;
    API.getContentListForPage(this.pageId).then(function(viewmodel){
      self.setState({isAuthenticated: viewmodel.isAuthenticated});
      self.setState({contentList: viewmodel.contentList});
    });
  }
  componentWillUnmount() {

  }

  handleSubmit(event) {
    event.preventDefault();
  }
  setStateForContentList(){
    this.setState({contentList: this.state.contentList})
  }

  submit(event){
    API.saveContentListForPage(this.state.contentList, this.pageId, this.props.history);
  }


  render() {
    var propsData = {isEdit: true, contentList: this.state.contentList, editLink: '/how-to-get-there/edit',
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

export default EditHowToGetThere;
