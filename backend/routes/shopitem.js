
const express = require("express");
const router = express.Router();
const { model } = require('mongoose');
const { application } = require('express');

const shopItem = require('../Model/itemmodel');

const getSampleItems = require('../src/data');
const getSampleTags =  require('../src/sampletags');
const { count } = require("../Model/itemSchema");

allItems = getSampleItems();
allTags = getSampleTags();

router.get("/test", (req,res) => {
    res.send("Router Works!");
});

router.get("/api/items", async(request,response) => {
    const items = await shopItem.find();
    response.send(items);
    console.log(getSampleItems());
})

// getting items by search term
router.get("/api/items/search/:searchTerm", async(req,res) => {
    const searchRegx = new RegExp(req.params.searchTerm, 'i');
    const items = await shopItem.find({tag: {$regex:searchRegx}})

    //const searchTerm = req.params.searchTerm;
    //const items = allItems.filter(item => item.tag.includes(searchTerm.toLocaleLowerCase()));
    res.send(items);
})

router.get("/api/items/tags", async(req,res) => {
    const tags = await shopItem.aggregate([
        {$unwind:'$tag'},
        {$group:{
            _id: '$tag',
            count: {$sum: 1}
        }},
        {$project:{
            _id:0,
            name: '$_id',
            count: '$count'
        }}
    ]).sort({count: -1});

    const all = {
        name: "All",
        count: await shopItem.countDocuments()
    }

    tags.unshift(all);
    res.send(tags);
})

router.get("/api/items/tags/:tagName", async(req,res) => {
    const items = await shopItem.find({tag: req.params.tagName});

    //var tagName = req.params.tagName;
    //const items = allItems.filter(item => item.tag?.includes(tagName))
    res.send(items);
});

router.get("/api/items/:itemId", async(req,res) => {
    const citem = await shopItem.findById(req.params.itemId)

    //const itemId = req.params.itemId;
    //const citem = allItems.find(item => item.id == itemId)
    res.send(citem);
});

router.post("/seed", async(req,res) => {

    try {
        // making the schema by extracting values from the body
        var newItem = new shopItem({

            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            tag: req.body.tag,
            imageUrl: req.body.imageUrl,
            stars: req.body.stars,
            
        });

        //saving them in the db
        const iItem = await newItem.save(); // iItem stands for inserted item in here
        res.json(newItem); 

    } catch (e) {
        console.log(e.message);
    }

});

module.exports = router;