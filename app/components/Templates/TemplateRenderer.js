import React from 'react';
import {Link} from 'react-router';
import BasicTemplate from './BasicTemplate/BasicTemplate';
import ListTemplate from './ListTemplate/ListTemplate';
import ListGridTemplate from './ListGridTemplate/ListGridTemplate';
import PhotoAlbumTemplate from './PhotoAlbumTemplate/PhotoAlbumTemplate';

class TemplateRenderer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if(this.props.templateId === 1){
      return (
        <BasicTemplate {...this.props} />
      );
    }
    else if(this.props.templateId === 2){
      return (
        <PhotoAlbumTemplate {...this.props} />
      );
    }
    else if(this.props.templateId === 3){
      return (
        <ListTemplate {...this.props} />
      );
    }
    else if(this.props.templateId === 4){
      return (
        <ListGridTemplate {...this.props} />
      );
    }
    else{
      throw "There is no Template that matches for templateId.";
    }
  }
}

export default TemplateRenderer;
