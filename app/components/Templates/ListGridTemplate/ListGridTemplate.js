import React from 'react';
import {Link} from 'react-router';
import EmptyContent from '../../EmptyContent';
import ListGridGroup from '../../Widgets/ListGridItem/ListGridGroup';
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

  }

  componentWillUnmount() {

  }

  updateContent(index, event) {
    this.props.contentList[index].value = event.target.value;
    this.props.setStateForContentList();
  }

  removeContent(index, event){
    this.props.contentList.splice(index, 1);
    TemplateHelper.setNewSortOrderForAllListItems(this.props.contentList);
    this.props.setStateForContentList();
  }

  addParentListItem(){
    var sortOrder = this.props.contentList.length + 1;
    var longDescriptionFactory = new LongDescriptionFactory(sortOrder, 'List Parent Item',
      'List Parent Item', this.templateId);
    var longDescription = longDescriptionFactory.create();

    var newGroup = {parentListItem: longDescription, columns: [], rows: []};
    this.state.contentGroupList.push(newGroup);
    this.setStateForContentGroupList();
  }

  setStateForContentGroupList(){
    var newContentList = [];

    _.each(this.state.contentGroupList, function(group, index){
      _.each(group.rows, function(row, index){
        _.each(row.columns, function(column, index){
          _.each(column.contentList, function(contentItem, index){
            newContentList.push(contentItem);
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
