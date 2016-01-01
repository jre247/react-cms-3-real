import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';
import Field from '../../Widgets/Field/Field';
import FieldHelper from '../../Widgets/Field/FieldHelper';
import TemplateHelper from '../../Templates/TemplateHelper';
import WidgetSelectList from '../../Widgets/WidgetSelectList';
import ListGridGroupColumn from '../../Widgets/ListGridItem/ListGridGroupColumn';

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

    let nodes = this.props.row.columns.map((column, index) => {
      var propsData = {
        column: column,
        column_number: index
      };
      var columnProps = _.extend(propsData, this.props);

      return(
        <div key={index} className={index === 0 && !this.props.isEdit ? 'List-Grid-Group-Column-Small' : 'List-Grid-Group-Column'}>
          <ListGridGroupColumn {...columnProps} />
        </div>
      );
    });

    return (
      <div>
        <div>
          <div className="List-Grid-Row">
            {nodes}
          </div>
        </div>
      </div>
    );
  }
}

export default ListGridGroupRow;
