import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../../Templates/TemplateHelper';
import WidgetSelectList from '../../Widgets/WidgetSelectList';
import ListGridGroupColumn from '../../Widgets/ListGridItem/ListGridGroupColumn';
import GridRowLayout from '../../Widgets/Components/GridRowLayout';
import ContentSettings from '../Components/ContentSettings/ContentSettings';

class ListGridGroupRow extends React.Component {
  constructor(props) {
    super(props);
    this.templateId = this.props.templateId;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    var propsData = {
      contentItem: this.props.contentGroupItem.parentListItem
    };

    var self = this;

    let nodes = this.props.row.columns.map((column, index) => {
      var propsData = {
        column: column,
        column_number: index
      };
      var columnProps = _.extend(propsData, this.props);

      // get the first content item in column to add styles to
      var contentIndex = 0;
      var contentItem = column.contentList[contentIndex];

      var gridRowLayoutProps = _.extend({
        contentItem: contentItem,
        contentIndex: contentIndex,
        isListGridTemplate: true
      }, self.props);

      if(this.props.isEdit){
        return(
          <GridRowLayout key={index}  {...gridRowLayoutProps}>
            <div className={index === 0 ? 'List-Grid-Group-Column-Small-Edit' : 'List-Grid-Group-Column-Edit'}>
                <ListGridGroupColumn {...columnProps} />
            </div>
          </GridRowLayout>
        );
      }
      else{
        var styleData = {};
        var marginRightSetting = contentItem.settings[4];
        if(marginRightSetting){
          styleData.marginRight = marginRightSetting.setting_value;
        }

        return (
          <div className="list-grid-row-container" key={index} style={styleData}>
            <GridRowLayout {...gridRowLayoutProps}>
              <div className={index === 0 ? 'List-Grid-Group-Column-Small' : 'List-Grid-Group-Column'}>
                  <ListGridGroupColumn {...columnProps} />
              </div>
            </GridRowLayout>
          </div>
        );
      }
    });

    return (
      <div>
        <div>
          <div className={this.props.isEdit ? "List-Grid-Row-Edit" : "List-Grid-Row"}>
            {nodes}
          </div>
        </div>
      </div>
    );
  }
}

export default ListGridGroupRow;
