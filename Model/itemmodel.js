
const mongoose = require("mongoose");

const shopItemSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String},
    price: {type: Number},
    tag: {type: Array},
    imageUrl: {type: String},
    stars: {type: Number}
});

module.exports = mongoose.model("shopitems", shopItemSchema);