const express = require('express');
const ordermodel = require('../Model/ordermodel');
const router = express().Router();
const auth = require('../middlewares/authmid');

router.use(auth);

router.post('/create', async(req,res) => {
    const requestOrder = req.body;

    if(requestOrder.items.length <= 0) {
        res.status(400).send('Cart is Empty')
        return;
    }

    await ordermodel.deleteOne({
        user: req.user.id,
        status: "NEW"
    })

    const newOrder = new ordermodel({...requestOrder, user: req.user.id});
    await newOrder.save();
    res.send(newOrder);
})