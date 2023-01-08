const express = require("express");
const router  = express();
const jwt = require("jsonwebtoken");

const sUser = require("../Model/userSchema");

const Users = require('../src/sampleuser');


/*
router.get('/', (req,res) => {
    res.send("Hello from User");
});
*/

router.post('/api/login', (req,res) => {
    const body = req.body;
    const {email, password} = req.body; // instead of using body.email etc.. we can save these data in email etc varibles by this
    const user = Users().find(user => user.email === email && user.password === password);

    if(user){
        res.send(generateTokenResponse(user))
    } else {
        res.status(400).send("User name or password is not valid!");
    }
});



// finding user by name as query param
router.get('/:id', async(req,res) => {
    try {
        // const tempName = `"${req.params.id}"`;
        const sUser = await sUser.findByName(req.params.id);
        console.log(sUser);
        res.send(sUser);
    } catch (e) {
        console.log(e.message);
    }
});

router.post('/', async(req,res) => {
    try {
        var newUser = new sUser({

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

const generateTokenResponse = (user) => {
    const token = jwt.sign({
        eamil:user.email, isAdmin:user.isAdmin
    },"SomeRandomText", {
        expiresIn:"1d"
    })

    user.token = token;
    return user;
}
 
module.exports = router;