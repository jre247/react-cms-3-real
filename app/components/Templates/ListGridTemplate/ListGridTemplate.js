import React from 'react';
import {Link} from 'react-router';
import EmptyContent from '../../EmptyContent';
import ListGridGroup from '../../Widgets/ListGridItem/ListGridGroup';
import ListGridGroupFactory from '../../Widgets/ListGridItem/ListGridGroupFactory';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../TemplateHelper';
import {_} from 'underscore';
import TitleFactory from '../../Widgets/Title/TitleFactory';
import API from '../../../API';

class ListGridTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contentGroupList: [], contentList: [], isAuthenticated: false};
    this.templateId = 5;
  }

  componentDidMount() {
    var self = this;
    API.getContentListForPage(this.pageId).then(function(viewmodel){
      self.setState({isAuthenticated: viewmodel.isAuthenticated});
      self.setState({contentList: viewmodel.contentList});

      self.buildContentGroupList();
      self.setStateForContentGroupList();
    });
  }

  componentWillUnmount() {

  }
  setStateForContentList(newContentList){
    this.setState({contentList: newContentList})
  }

  setStateForContentGroupList(){
    var newContentList = this.buildContentList();

    this.setState({contentGroupList: this.state.contentGroupList});
    this.setStateForContentList(newContentList);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  submit(event){
    API.saveContentListForPage(this.state.contentList, this.props.pageId, this.props.history);
  }

  buildContentGroupList(){
    var self = this;
    var contentGroupIndex;

    _.each(this.state.contentList, function(contentItem, index){
      if(FieldHelper.isParentListItem(contentItem)){
        var factory = new ListGridGroupFactory(contentItem);
        var contentGroup = factory.create();
        self.state.contentGroupList.push(contentGroup);

        // want to initialize group index to be 0 for the first parent list item, and then increment
        // for subsequent parent list items
        if(typeof contentGroupIndex === 'number'){
          contentGroupIndex++;
        }
        else{
          contentGroupIndex = 0;
        }
      }
      else{
        var contentGroup = self.state.contentGroupList[contentGroupIndex];
        self.buildRowsAndColumnsForGroup(contentGroup, contentItem);
        contentGroup.rows[contentItem.row_number].columns[contentItem.column_number].contentList.push(contentItem);
      }
    });
  }

  buildRowsAndColumnsForGroup(contentGroup, contentItem){
    var row = contentGroup.rows[contentItem.row_number];
    if(!row){
      var newRow = {columns: []};
      contentGroup.rows.push(newRow);
    }

    var column = contentGroup.rows[contentItem.row_number].columns[contentItem.column_number];
    if(!column){
      var newColumn = {contentList: []};
      contentGroup.rows[contentItem.row_number].columns.push(newColumn);
    }
  }

  addParentListItem(){
    var sortOrder = this.state.contentList.length + 1;
    var parentIndex = null;
    var row_number = 1, column_number = 1;
    var factory = new TitleFactory(sortOrder, 'List Parent Item',
      'List Parent Item', this.templateId, parentIndex, row_number, column_number);
    var widget = factory.create();

    var listGridGroupFactory = new ListGridGroupFactory(widget);
    var contentGroup = listGridGroupFactory.create();
    this.state.contentGroupList.push(contentGroup);

    this.setStateForContentGroupList();
  }

  buildContentList(){
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

    return newContentList;
  }

  render() {
    if(_.isEmpty(this.state.contentGroupList)){
      var emptyContentProps = _.extend({isAuthenticated: this.state.isAuthenticated,
        editLink: this.props.editLink}, this.props);

      return (
        <div>
          <div className={!this.props.isEdit ? "hidden" : ""}>
            <button className="btn btn-primary" onClick={this.addParentListItem.bind(this)}>Add Group</button>
          </div>
          <EmptyContent {...emptyContentProps} />
        </div>
      );
    }
    else {
      let nodes = this.state.contentGroupList.map((contentGroupItem, index) => {
        var propsData = {
          isAuthenticated: this.state.isAuthenticated,
          contentGroupList: this.state.contentGroupList,
          contentGroupItem: contentGroupItem, isEdit: this.props.isEdit,
          setStateForContentGroupList: this.setStateForContentGroupList.bind(this, index),
          templateId: this.templateId,
          contentGroupIndex: index,
          contentList: this.state.contentList,
          setStateForContentList: this.setStateForContentList.bind(this)
        };
        var listItemProps = _.extend(propsData, this.props);

        return(
          <div key={index}>
            <ListGridGroup {...listItemProps} />
          </div>
        );
      });

      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='container List-page'>
            <div className='row List-container'>
              <div className='Content-panel List-Grid-Template'>
                <div className={!this.props.isEdit ? "Edit-Content-Button" : "hidden"}>
                  <EditLink {...this.props} />
                </div>

                <div className={!this.props.isEdit ? "hidden" : ""}>
                  <button className="btn btn-primary" onClick={this.addParentListItem.bind(this)}>Add Group</button>
                </div>

                <div className={!this.props.isEdit ? 'List-Page-Read-Only' : 'List-page'}>
                  {nodes}
                </div>

                <div className={this.state.contentList.length > 0 && this.props.isEdit ? 'form-group' : 'form-group hidden'}>
                  <button type='submit' onClick={this.submit.bind(this)} className='btn btn-primary'>Save</button>
                </div>
              </div>
            </div>
          </div>
        </form>


      );
    }
  }
}

export default ListGridTemplate;
