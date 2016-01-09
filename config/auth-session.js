var loggedInUserRoles = [];
exports.getLoggedInUserRoles = function(){
  return loggedInUserRoles;
}
exports.setLoggedInUserRoles = function(userRoles){
  loggedInUserRoles = userRoles;
}
