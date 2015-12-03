import alt from '../alt';
import {assign} from 'underscore';

class VenueActions {
  constructor() {
    this.generateActions(
      'getVenueData',
      'updateAjaxAnimation'
    );
  }

}

export default alt.createActions(NavbarActions);
