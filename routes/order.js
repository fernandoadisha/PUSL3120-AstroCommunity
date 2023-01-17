const express = require('express');
const { application } = require('express');
const router = express.Router();
const { model } = require('mongoose');

// currently issue in in below line
const ordermodel = require('../Model/ordermodel');

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
    console.log("Creating new user sucessful!\n" + newOrder + "\n-----------------");
    await newOrder.save();
    
    res.send(newOrder);
})

router.get('/newOrderForCurrentUser', async(req,res) => {
    const order = await getNewOrderForCurrentUser(req);
    if(order) {
        res.send(order);
    }
    else {
        res.status(400).send();
    }
})

router.post('/pay', async(req,res) => {
    const {paymentId} = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if(!order){
        res.status(400).send('Order Not Found');
        return;
    }

    order.paymentId = paymentId;
    order.status = "PAYED"
    await order.save();

    res.send(order._id);
})

router.get('/track/:id', async(req,res) => {
    const order = await ordermodel.findById(req.params.id);
    res.send(order);
})


module.exports = router;

async function getNewOrderForCurrentUser(req) {
    try {
        return await ordermodel.findOne({ user: req.user.id, status: "NEW" });
    }
    catch (error) {
        console.log("Getting logginh details error: " + error.error);
    }
}
