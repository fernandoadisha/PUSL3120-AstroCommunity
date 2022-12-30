const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const Item = require('../Schemas/itemSchema');

// connecting to mongoose
const mongoose = require('mongoose');
const { application } = require('express');
const mongoURL = "mongodb://0.0.0.0:27017/testdb";

// Inititating connection with MongoDB
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

    try {
        // making the schema by extracting values from the body
        var newItem = new Item({

            itemID: req.body.itemID,
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            itemStock: req.body.itemStock
            
        });

        //saving them in the db
        const iItem = await newItem.save(); // iItem stands for inserted item in here
        res.json(newItem); 

    } catch (e) {
        console.log(e.message);
    }

});

module.exports = router;