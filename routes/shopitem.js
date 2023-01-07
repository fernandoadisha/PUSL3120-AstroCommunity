const express = require("express");
const router = express.Router();

const getSampleItems = require('../src/data');
const getSampleTags =  require('../src/sampletags');

allItems = getSampleItems();
allTags = getSampleTags();

router.get("/api/items", (request,response) => {
    response.send(getSampleItems());
    console.log(getSampleItems());
})

// getting items by search term
router.get("/api/items/search/:searchTerm", (req,res) => {
    const searchTerm = req.params.searchTerm;
    const items = allItems.filter(item => item.tag.includes(searchTerm.toLocaleLowerCase()));
    res.send(items);
})

router.get("/api/items/tags", (req,res) => {
    res.send(allTags);
})

router.get("/api/items/tags/:tagName", (req,res) => {
    var tagName = req.params.tagName;
    const items = allItems.filter(item => item.tag?.includes(tagName))
    res.send(items);
});

router.get("/api/items/:itemId", (req,res) => {
    const itemId = req.params.itemId;
    const citem = allItems.find(item => item.id == itemId)
    res.send(citem);
});

module.exports = router;