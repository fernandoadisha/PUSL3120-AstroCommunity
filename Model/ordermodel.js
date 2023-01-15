const mongoose = require('mongoose');
const ItemModel = require("./itemmodel");

const latlng = new mongoose.Schema({
    lat: String,
    lng: String
});

const orderItem = new mongoose.Schema({
    item: {type: ItemModel},
    price: {type: Number},
    quantity: {type: Number}
});

const orderSchema = new mongoose.Schema({
    items: orderItem, //maybe thhis can be just Array
    totalPrice: Number,
    name: String,
    address: String,
    addressLatLng: latlng,
    paymentId: String,  
    status: {type: String, default:"NEW"},
    user: mongoose.Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
},{
    timestamps: true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals: true
    }
});

module.exports = mongoose.model("order", orderSchema);