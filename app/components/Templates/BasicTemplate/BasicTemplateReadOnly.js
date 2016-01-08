import React from 'react';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';
import EditLink from '../../EditLink';

class BasicTemplateReadOnly extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(_.isEmpty(this.props.contentList)){
      var emptyContentProps = {editLink: this.props.editLink};
      return (
        <EmptyContent {...emptyContentProps} />
      );
    }
    else {
      let nodes = this.props.contentList.map((contentItem, index) => {
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
