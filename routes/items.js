const express = require('express');
const { model } = require('mongoose');
const router = express.Router();



const Item = require('../Schemas/itemSchema');

// connecting to mongoose
const mongoose = require('mongoose');
const mongoURL = "mongodb://0.0.0.0:27017/testdb";

mongoose.connect(mongoURL, () => {
    console.log("Connected to DB");
}), e => console.error(e);

router.get("/", (req,res) => {
    res.send("You are in items section");
    
});

router.get("/new", async(req,res) => {
    try {
        let getItem = await Item.find();
        res.json(getItem);
    } catch(e) {
        console.log(e.message);
    }

});

router.post("/new", async(req,res) => {
    const newItem = new Item({
        itemID: req.body.itemID,
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemStock: req.bidy.itemStock
    });

    try {
        const iItem = await newItem.save(); // iItem stands for inserted item in here
        res.json(iItem);
    } catch (e) {
        console.log(e.message);
    }

});

module.exports = router;