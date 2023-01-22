const port = 9000;
const app = require("./app");

// initiating the app
app.listen(port, () => {
    console.log("Server listen on port: " + port);
});