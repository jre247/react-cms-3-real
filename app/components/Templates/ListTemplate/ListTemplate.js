import React from 'react';
import {Link} from 'react-router';
import EmptyContent from '../../EmptyContent';
import SubListItem from '../Widgets/ListItem/SubListItem';
import ParentListItem from '../Widgets/ListItem/ParentListItem';
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
      return (
        <EmptyContent {...this.props} />
      );
    }
    else {
      let nodes = this.props.contentList.map((thingToDo, index) => {
          if(this.isSubListItem(thingToDo)){
            var subListItemProps = {listItem: thingToDo, isEdit: this.props.isEdit};
            return (
              <SubListItem {...subListItemProps} />
            );
          }
          else{
            var listItemProps = {listItem: thingToDo, isEdit: this.props.isEdit};
            return (
              <ParentListItem {...listItemProps} />
            );
          }
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
