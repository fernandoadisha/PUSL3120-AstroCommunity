const express = require("express");
const router  = express();

const User = require("../Model/userSchema");

/*
router.get('/', (req,res) => {
    res.send("Hello from User");
});
*/

// finding user by name as query param
router.get('/:id', async(req,res) => {
    try {
        // const tempName = `"${req.params.id}"`;
        const sUser = await User.findByName(req.params.id);
        console.log(sUser);
        res.send(sUser);
    } catch (e) {
        console.log(e.message);
    }
});

router.post('/', async(req,res) => {
    try {
        var newUser = new User({

            userID: req.body.uID,
            userName: req.body.uName,
            userBD: req.body.uBD, 
            userEmail: req.body.uEmail,
            userPassword: req.body.uPass

        });

        // Adding new user to database
        var addedUser = await newUser.save();
        res.json(newUser);


    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;