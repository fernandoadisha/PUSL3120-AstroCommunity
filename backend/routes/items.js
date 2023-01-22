const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const { application } = require('express');

const Item = require('../Model/itemSchema');

router.get('/testing', (req,res) => {
    res.send("Testing test");
})


// making an dynamic route, ":id" in here takes user assigned value
// below code the item is being found using the the item
/*
router.get('/:id', async(req,res) => {
    try {
        let oneItem = await Item.findById(req.params.id);
        res.json(oneItem);
    } catch(e) {
        console.log(e.message);
    }

});
*/



router.get('/:id', async(req,res) => {
    try {
        let oneItem = await Item.findByTag(req.params.id);
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



//getting all the items
router.get("/", async(req,res) => {
    try {
        let getItem = await Item.find();
        res.json(getItem);
    } catch(e) {
        console.log(e.message);
    }

});

// saving items
router.post("/", async(req,res) => {

    try {
        // making the schema by extracting values from the body
        var newItem = new Item({

            itemID: req.body.itemID,
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            itemStock: req.body.itemStock,
            itemTags: req.body.itemTags
            
        });

        //saving them in the db
        const iItem = await newItem.save(); // iItem stands for inserted item in here
        res.json(newItem); 

    } catch (e) {
        console.log(e.message);
    }

});


module.exports = router;