import React from 'react';
import {Link} from 'react-router';
import EmptyContent from '../../EmptyContent';
import ListGridGroup from '../../Widgets/ListGridItem/ListGridGroup';
import ListGridGroupFactory from '../../Widgets/ListGridItem/ListGridGroupFactory';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../TemplateHelper';
import {_} from 'underscore';
import LongDescriptionFactory from '../../Widgets/LongDescription/LongDescriptionFactory';

class ListGridTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contentGroupList: []};
    this.templateId = 5;
  }

  componentDidMount() {
    this.buildContentGroupList();
  }

  componentWillUnmount() {

  }

  buildContentGroupList(){
    var contentGroupIndex = 0;
    debugger;
    _.each(this.props.contentList, function(contentItem, index){
      if(FieldHelper.isParentListItem(contentItem)){
        var factory = new ListGridGroupFactory(parentListItem);
        var contentGroup = factory.create();
        this.state.contentGroupList.push(contentGroup);

        contentGroupIndex++;
      }
      else{
        var contentGroup = this.state.contentGroupList[contentGroupIndex];
        contentGroup.rows[contentItem.row_number].columns[contentItem.column_number] = contentItem;
      }
    });
  }

  addParentListItem(){
    var sortOrder = this.props.contentList.length + 1;
    var longDescriptionFactory = new LongDescriptionFactory(sortOrder, 'List Parent Item',
      'List Parent Item', this.templateId);
    var longDescription = longDescriptionFactory.create();

    var factory = new ListGridGroupFactory(longDescription);
    var contentGroup = factory.create();
    this.state.contentGroupList.push(contentGroup);

    this.setStateForContentGroupList();
  }

  setStateForContentGroupList(){
    var newContentList = [];

    _.each(this.state.contentGroupList, function(group, index){
      var parentListItem = group.parentListItem;
      newContentList.push(parentListItem);

      _.each(group.rows, function(row, index){
        _.each(row.columns, function(column, index){
          _.each(column.contentList, function(childContentItem, index){
            newContentList.push(childContentItem);
          });
        });
      });
    });

    this.setState({contentGroupList: this.state.contentGroupList});
    this.props.setStateForContentList(newContentList);
  }

  render() {
    if(_.isEmpty(this.state.contentGroupList)){
      var emptyContentProps = _.extend({editLink: this.props.editLink}, this.props);
      return (
        <div>
          <div className={!this.props.isEdit ? "hidden" : ""}>
            <button className="btn btn-primary" onClick={this.addParentListItem.bind(this)}>Add</button>
          </div>
          <EmptyContent {...emptyContentProps} />
        </div>
      );
    }
    else {
      let nodes = this.state.contentGroupList.map((contentGroupItem, index) => {
        var propsData = {
          contentGroupList: this.state.contentGroupList,
          contentGroupItem: contentGroupItem, isEdit: this.props.isEdit,
          setStateForContentGroupList: this.setStateForContentGroupList.bind(this, index),
          templateId: this.templateId,
          contentGroupIndex: index
        };
        var listItemProps = _.extend(propsData, this.props);

        return(
          <div key={index}>
            <ListGridGroup {...listItemProps} />
          </div>
        );
      });

      return (
        <div>
          <div className='Content-panel List-template'>
            <div className={!this.props.isEdit ? "Edit-Content-Button" : "hidden"}>
              <Link className="Navigation-link" to={this.props.editLink}>Edit</Link>
            </div>

            <div className={!this.props.isEdit ? "hidden" : ""}>
              <button className="btn btn-primary" onClick={this.addParentListItem.bind(this)}>Add</button>
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

export default ListGridTemplate;
