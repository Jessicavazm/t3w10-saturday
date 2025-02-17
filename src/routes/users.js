// Import Express
const express = require('express');

// Import the express mini router
// This will be used for any operations on /users
const router = express.Router();

// GET localhost:3000/users
router.get("/", (req, res) => {
    // Database query to fetch the list of users
    
    // Attach the query results in the response body
    res.json({
        data: [
            "Bob",
            "Alice",
            "Venice",
            "Luke"
        ]
    })
});

// POST localhost:3000/users/login
router.post("/signup", (req, res) => {
    // receivedUserData that receives the data from the user request body
    let receivedUserData = req.body;

    // Get the hashed password from the front end and encrypt it
    receivedUserData.password = "EncryptedPassword";

    // Store the data to the database using a query
    let databaseResult = {...receivedUserData};

    // Send the newly created user data as a response for acknowledgment
    res.json(databaseResult);
});

module.exports = router;