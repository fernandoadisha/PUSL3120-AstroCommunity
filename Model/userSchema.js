const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userID: Number,
    userName: String,
    userBD: Date, //BD stands for the birthday
    userEmail: String,
    userPassword: String
});

// making a custom findByName method (static level)
userSchema.statics.findByName = function(name) {
    return this.where({userName: new RegExp(name, 'i')});
}


function findByName(name) {
    
}
module.exports = mongoose.model("users", userSchema);