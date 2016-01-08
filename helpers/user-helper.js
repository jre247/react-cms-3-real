var bcrypt   = require('bcrypt-nodejs');

// checking if password is valid
exports.validPassword = function(password, passwordInDb) {
    return bcrypt.compareSync(password, passwordInDb);
};

// generating a hash
exports.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
