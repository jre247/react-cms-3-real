var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var User = function(email, password){
    this.email = email;
    this.password = password;

    // methods ======================
// generating a hash
    var generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

// checking if password is valid
    var validPassword = function(password) {
        return bcrypt.compareSync(password, this.local.password);
    };

}


// create the model for users and expose it to our app
module.exports = User;
