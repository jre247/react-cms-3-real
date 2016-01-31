import React from 'react';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';
import EditLink from '../../EditLink';
import WidgetService from '../../Widgets/WidgetService';
var self;

class BasicTemplateReadOnly extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = 1;
    this.state = {contentList: []};
    self = this;
  }

  componentDidMount() {
    this.getContentListForPage(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.getContentListForPage(nextProps);
  }

  componentWillUnmount() {

  }
  setStateForContentList(newContentList){
    self.setState({contentList: newContentList})
  }

  getContentListForPage(propsData){
    WidgetService.getContentListForPage(propsData.pageId, propsData.isEdit).then(function(viewmodel){
      self.setState({contentList: viewmodel.contentList || []});
    });
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
        var settings = contentItem.settings;

        var propsData = _.extend({
          contentItem: contentItem,
          settings: _.clone(settings)
        }, this.props);

        return (
          <div key={index}>
            <Field {...propsData} />
          </div>
        );
      });

      return (
        <div className='Content-panel basic-template-read-only'>
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
