import {_} from 'underscore';

class AuthHelper {
  constructor() {

  }

  static isUserPublisher(userRoles){
    var publisherRoles = [1, 2];
    
    var publisherRolesForUser = _.intersection(userRoles, publisherRoles);
    if(publisherRolesForUser.length > 0){
      return true;
    }

    return false;
  }

  static isUserAdmin(userRoles){
    var adminRoles = [2];

    var adminRolesForUser = _.intersection(userRoles, adminRoles);
    if(adminRolesForUser.length > 0){
      return true;
    }

    return false;
  }
}

export default AuthHelper;
