const port = 9000;
const app = require("./app");
const cors = require('cors')
const { Server } = require('socket.io');
// const { Socket } = require("socket.io-client");
const http = require("http").createServer(app);
const connectMongo = require('./mongoconnect')

connectMongo();


// initiating the app
const expressServer = app.listen(port, () => {
    console.log("Server listen on port: " + port);
});

const io =  new Server(expressServer, {
    cors: {
        origin: ['http://localhost:4200'],
        methods: ["GET","POST"],
        credentials: true
    }
});


io.on('connect', (socket) => {
    console.log("User Connected");
    socket.on('disconnect', () => {
        console.log("User Disconnected");
    })

    socket.on('message', (message,name, room) => {
        let chat = {
            "name":name,
            "message":message,
            "room":room
        }
        console.log(chat);
        io.emit('incomming', chat);
    })

})




