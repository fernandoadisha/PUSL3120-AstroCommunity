//importing required libraries
const http = require("http"); //importing http module
const mongoose = require("mongoose"); // importing mongoose library
const mongoUrl = "mongodb://0.0.0.0:27017/testdb"; //URL for mongodb 
const express = require("express"); // importing express library
const app = express(); // initiating express application
const path = require("path");
const cors = require("cors");
// const bodyparser = require("body-parse"); // ** maybe not really required **
mongoose.set('strictQuery', false); // hiding a warning

let port = 9000;

app.get("/", (request,responce) => {
    responce.send("Hello From Main Page");
})

// connecting items router to server.js
const itemRouter = require('./routes/items');
app.use('/items', itemRouter);


// initiating the app
app.listen(port, () => {
    console.log("Server listen on port: " + port);
});