const jwt = require("jsonwebtoken");
require("dotenv").config();

function authmid (req,res,next) {
    const token = req.headers.access_token;
    if(!token) return res.status(401).send();
    try {
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decodedUser);

        req.user = decodedUser;

    } catch(error) {
        res.status(401).send();
        console.log("Error getting decorded user!")
    }

    return next();
}

module.exports = authmid;