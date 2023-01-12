//importing required libraries
const dotenv = require('dotenv')
const http = require("http"); //importing http module
const mongoose = require("mongoose"); // importing mongoose library
// const mongoUrl = "mongodb://0.0.0.0:27017/testdb"; //URL for mongodb 
const express = require("express"); // importing express library
const app = express(); // initiating express application
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");
// const bodyparser = require("body-parse"); // ** maybe not really required **
mongoose.set('strictQuery', false); // hiding a warning


app.use(express.json());

dotenv.config();


// Making express accept request from locahost:4200(Angular app)
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

// Inititating connection with MongoDB
mongoose.connect(process.env.MONGO_URI_LOCAL, () => { // originally it "mongoUrl" was used here as first paramater
    console.log("Connected to DB");
}), e => console.error(e);

let port = 9000;

app.get("/", (request,response) => {
    response.send(process.env.MONGO_URI_LOCAL);
    //response.send("Hello From Main Page");
})


// connecting items router to server.js
const itemRouter = require('./routes/items');
app.use('/items', itemRouter);

// connecting user touter to server.js
const userRouter = require('./routes/user');
const { sample_items } = require("./src/data");
app.use('/user', userRouter);

const shopItemRouter = require('./routes/shopitem')
app.use('/shopitem', shopItemRouter);


// initiating the app
app.listen(port, () => {
    console.log("Server listen on port: " + port);
});