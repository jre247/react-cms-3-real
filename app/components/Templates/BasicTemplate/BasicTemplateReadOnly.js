import React from 'react';
import {Link} from 'react-router';
import Field from '../../Widgets/Field/Field';
import EmptyContent from '../../EmptyContent';
import {_} from 'underscore';

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
          var propsData = {contentItem: contentItem, isEdit: this.props.isEdit};

          return (
            <div key={contentItem.sort_order}>
              <Field {...propsData} />
            </div>
          );
      });

      return (
        <div className='Content-panel'>
          <div className="Content-container Content-centered-container">
            <div className="Edit-Content-Button">
              <Link className="Navigation-link" to={this.props.editLink}>Edit</Link>
            </div>

            {nodes}
          </div>
        </div>
      );
    }
  }
}

export default BasicTemplateReadOnly;
