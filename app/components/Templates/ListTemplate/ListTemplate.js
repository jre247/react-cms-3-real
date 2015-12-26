import React from 'react';
import {Link} from 'react-router';
import EmptyContent from '../../EmptyContent';
import SubListItem from '../../Widgets/ListItem/SubListItem';
import ParentListItem from '../../Widgets/ListItem/ParentListItem';
import Field from '../../Widgets/Field/Field';
import {_} from 'underscore';

class ListTemplate extends React.Component {
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
        var listItemProps = {contentItem: contentItem, isEdit: this.props.isEdit, isListItem: true};
        return (
          <div key={contentItem.sort_order}>
            <Field {...listItemProps} />
          </div>
        )
      });

      return (
        <div>
          <div className='Content-panel'>
            <div className="Edit-Content-Button">
              <Link className="Navigation-link" to={this.props.editLink}>Edit</Link>
            </div>
            <div className='row List-page'>
              {nodes}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ListTemplate;
