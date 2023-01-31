const mongoose = require("mongoose"); // importing mongoose library

function connectMongo() {
    mongoose.connect(process.env.MONGO_URI, async () => { // originally it "mongoUrl" was used here as first paramater
        await console.log("Connected to DB");
    }), e => console.log(e);
}

module.exports = connectMongo;