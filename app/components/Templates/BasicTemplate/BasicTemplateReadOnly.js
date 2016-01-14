import React from 'react';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';
import EditLink from '../../EditLink';
import API from '../../../API';
var self;

class BasicTemplateReadOnly extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 1;
    this.state = {contentList: []};
    self = this;
  }

  componentDidMount() {
    API.getContentListForPage(this.props.pageId, this.props.isEdit).then(function(viewmodel){
      self.setStateForContentList(viewmodel.contentList);
    });
  }

  //need to get page in this method since componentDidMount does not get called when
  //changing routes to another page
  componentWillReceiveProps(nextProps){
    API.getContentListForPage(nextProps.pageId, nextProps.isEdit).then(function(viewmodel){
      self.setStateForContentList(viewmodel.contentList);
    });
  }
  
  componentWillUnmount() {

  }
  setStateForContentList(newContentList){
    self.setState({contentList: newContentList})
  }

  render() {
    if(_.isEmpty(this.state.contentList)){
      var emptyContentProps = {editLink: this.props.editLink};
      return (
        <EmptyContent {...emptyContentProps} />
      );
    }
    else {
      let nodes = this.state.contentList.map((contentItem, index) => {
          var propsData = _.extend({contentItem: contentItem, isEdit: this.props.isEdit}, this.props);

          return (
            <div key={contentItem.sort_order}>
              <Field {...propsData} />
            </div>
          );
      });

      return (
        <div className='Content-panel'>
          <div className="Content-container Content-centered-container">
            <EditLink {...this.props} />

            {nodes}
          </div>
        </div>
      );
    }
  }
}

export default BasicTemplateReadOnly;
