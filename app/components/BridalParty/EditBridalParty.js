import React from 'react';
import {_} from 'underscore';
import ListGridTemplate from '../Templates/ListGridTemplate/ListGridTemplate';
import API from '../../API';

class EditBridalParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contentList: []};
    this.pageId = 7;
  }

  componentDidMount() {
    var self = this;
    API.getContentListForPage(this.pageId).then(function(contentList){
      self.setState({contentList: contentList});
    });
  }
  componentWillUnmount() {

  }

  handleSubmit(event) {
    event.preventDefault();
  }
  setStateForContentList(newContentList){
    this.setState({contentList: newContentList})
  }

  submit(event){
    API.saveContentListForPage(this.state.contentList, this.pageId, this.props.history);
  }


  render() {
    var propsData = {isEdit: true, contentList: this.state.contentList, editLink: '/bridal-party/edit',
       setStateForContentList: this.setStateForContentList.bind(this)};

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='container List-page'>
            <div className='row List-container'>
              <ListGridTemplate {...propsData} />
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

export default EditBridalParty;
