const express = require('express');
const router = express.Router();
const { application } = require('express');
const http = require("http").createServer(router);
const io = require('socket.io')(http, {
    cors:{
        origin: '*'
    }
});

router.get('/', (req,res) => {
   
});

module.exports = router;

