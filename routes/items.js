const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const { application } = require('express');

const Item = require('../Model/itemSchema');

router.get("/", (req,res) => {
    res.send("You are in items section");

});

// making an dynamic route, ":id" in here takes user assigned value
// below code the user is being found using the the user id
router.get('/:id', async(req,res) => {
    try {
        let oneItem = await Item.findById(req.params.id);
        res.json(oneItem);
    } catch(e) {
        console.log(e.message);
    }

});

// removing user (not tested)
router.delete('/:id', async(req,res) => {
    try {
        let oneItem = await Item.findById(req.params.id);
        await oneItem.delete();
    } catch(e) {
        console.log(e.message);
    }

});

// updating just one JSON value (Not tested)
router.patch('/:id', async(req,res) => {
    try {
        let oneItem = await Item.findById(req.params.id);
        oneItem.itemStock = req.body.itemStock;
        const newStock = await oneItem.save();
        res.json(oneItem);
    } catch(e) {
        console.log(e.message);
    }
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