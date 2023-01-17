const express = require("express");
const router  = express();
const jwt = require("jsonwebtoken");
const { model } = require('mongoose');
const { application } = require('express');

require("dotenv").config();

//const sUser = require("../Model/userSchema");
const sUser = require("../Model/usermodel");

const Users = require('../src/sampleuser');
const bcrypt = require('bcryptjs');



/*
router.get('/', (req,res) => {
    res.send("Hello from User");
});
*/

router.post('/api/login', async(req,res) => {
    const body = req.body;
    const {email, password} = req.body; // instead of using body.email etc.. we can save these data in email etc varibles by this
    const user = await sUser.findOne({email});
    //const user = Users().find(user => user.email === email && user.password === password);

    if(user && (await bcrypt.compare(password,user.password))){
        //res.send(user);
        res.send(generateTokenResponse(user))
    } else {
        res.status(400).send("User name or password is not valid!");
    }
});

router.post("/seed", async(req,res) => {

    try {
        // making the schema by extracting values from the body

        const {name, email, password, address, isAdmin} = req.body;

        const encryptedPassword = await bcrypt.hash(password, 10);

        var newUser = new sUser({

            name: name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            address: address,
            isAdmin: isAdmin,
            
        });

        const user = await sUser.findOne({email});

        // if user already exists with the email, error will be thrown
        if(user) {
            res.status(400).send("User already exists, please Log In");
            return;
        }

        //saving them in the db
        const iUser = await newUser.save(); // iUser stands for inserted user in here
        res.send(generateTokenResponse(iUser));
        //res.json(iUser);

    } catch (e) {
        console.log(e.message);
    }

});


/*
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
*/



const generateTokenResponse = (user) => {
    const token = jwt.sign({
        id:user.id, email:user.email, isAdmin:user.isAdmin
    },process.env.JWT_SECRET, { // In here the private key comes instead of "random text"
        expiresIn:"1h"
    })

    user.token = token;
    return user;
}
 
module.exports = router;