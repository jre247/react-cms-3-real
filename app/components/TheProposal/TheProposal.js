import React from 'react';
import {Link} from 'react-router';
import TheProposalStore from '../../stores/TheProposalStore';
import TheProposalActions from '../../actions/TheProposalActions';
import LongDescription from '../Widgets/LongDescription/LongDescription';
import EmptyContent from '../EmptyContent';
import ImageWidget from '../Widgets/Image/ImageWidget';
import {_} from 'underscore';
import FieldHelper from '../Field/FieldHelper';

class TheProposal extends React.Component {
  constructor(props) {
    super(props);
    this.state = TheProposalStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  onChange(state) {
    this.setState(state);
  }
  componentDidMount() {
    TheProposalStore.listen(this.onChange);
    TheProposalActions.getProposalData();
  }
  componentWillUnmount() {
    TheProposalStore.unlisten(this.onChange);
  }
  render() {
    if(_.isEmpty(this.state.contentList)){
      var emptyContentProps = {editLink: '/our-story/edit'}
      return (
        <EmptyContent {...emptyContentProps} />
      );
    }
    else {
      let theProposalNodes = this.state.contentList.map((contentItem, index) => {
          if(FieldHelper.isDescription(contentItem)){
            var longDescriptionProps = {value: contentItem.value, isEdit: false};
            return (
              <div key={contentItem.sort_order}>
                <LongDescription {...longDescriptionProps} />
              </div>
            );
          }
          else{
            var imageProps = {value: contentItem.value, isEdit: false};
            return (
              <div key={contentItem.sort_order}>
                <ImageWidget {...imageProps} />
              </div>
            );
          }
      });

      return (
        <div className='Content-panel'>
          <div className="Content-container">
            <div className="Edit-Content-Button">
              <Link className="Navigation-link" to="/our-story/edit">Edit</Link>
            </div>

            {theProposalNodes}
          </div>
        </div>
      );
    }
  }
}

export default TheProposal;
