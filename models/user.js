var UserHelper = require('../helpers/user-helper');

// define the schema for our user model
var User = function(firstName, lastName, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = UserHelper.generateHash(password);
}


// create the model for users and expose it to our app
module.exports = User;
