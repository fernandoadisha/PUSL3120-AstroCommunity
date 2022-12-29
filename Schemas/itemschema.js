const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemID: Number,
    itemName : String,
    itemPrice: Number,
    itemStock: Number
});

module.exports = mongoose.model("items", itemSchema);