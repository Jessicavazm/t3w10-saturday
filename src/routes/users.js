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

module.exports = router;