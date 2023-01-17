const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type: String},
    email: {type: String},
    name: {type: String},
    password: {type: String},
    address: {type: String},
    token: {type: String},
    isAdmin: {type: Boolean, default: false}
}, {
    timestamps: true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
});

/*
userSchema.statics.findOne = function(email,password) {
    return this.where({email: new RegExp(email, 'i'), password: new RegExp(password, 'i')});
}
*/

userSchema.statics.findByName = function(name) {
    return this.where({name: new RegExp(name, 'i')});
}

module.exports = mongoose.model("users", userSchema);
