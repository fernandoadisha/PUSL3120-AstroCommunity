
const mongoose = require("mongoose");

const shopItemSchema = new mongoose.Schema({
    //id: {type: String},
    name: {type: String},
    price: {type: Number},
    tag: {type: Array},
    imageUrl: {type: String},
    stars: {type: Number}
},{toJSON:{virtuals: true}, toObject: {virtuals: true}} );

module.exports = mongoose.model("shopitems", shopItemSchema);