const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemID: Number,
    itemName : String,
    itemPrice: Number,
    itemStock: Number,
    itemTags: Array
});

itemSchema.statics.findByTag = function(tag) {
    return this.where({itemTags: new RegExp(tag, 'i')});
}

itemSchema.statics.findByName = function(name) {
    return this.where({itemName: new RegExp(name, 'i')});
}

module.exports = mongoose.model("items", itemSchema);