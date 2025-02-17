// Here, we configure the application server
// Adding functionalities


// Reason for separation:
// Don't often need to start the server
// Can import the app without worrying about starting the app

// Import express
const express = require('express');

// Make an instance of the express server
const app = express();

// Start defining routes: instance.verb(url, middleware/ callback)
// GET localhost: 3000/
app.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    })
});

// Import the users route and tell the app to use it
const UserRoute = require("./routes/users.js");
app.use("/users", UserRoute);

// Export server
module.exports = {
    app
}