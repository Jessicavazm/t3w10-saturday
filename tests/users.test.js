// Importing the code that we want to test
const  { app } = require('../src/server.js');

// Importing a testing helper function from supertest
const request = require('supertest');

describe("Users route", () => {
    test.skip("'Get all users' route returns array of users", async () => {
        // GET localhost:3000/users
        const response = await request(app).get("/users")
    });
    test.skip("'Get user by ID' route returns a specific user only", async () => {
        // GET localhost:3000/users/:id
        let targetUserId = '1'
        const response = await request(app).get("/users/" + targetUserId); 
    });
    test.skip("'Create a new user' route returns the newly created user", async () => {
        // POST localhost:3000/users/signup
        // Anything in response variable is on the 'request body'
        const response = await request(app)
            .post("/users/signup")
            .send({
                username: "Jess",
                password: "abc123"
            });
    });
    test.skip("'Login user' route returns a specific user only", async() => {
        // POST localhost:3000/users/login
        const response = await request(app)
            .post("/users/signup")
            .send({
                username: "Jess",
                password: "abc123"
            });
    });
    test.skip("'Update/ Edit user' route returns a specific user only", async() => {
        // PUT/ PATCH localhost:3000/users/:id
        let targetUserId = '1'
        const response = await request(app)
            .patch("/users/" + targetUserId)
            .send({
                username: "Jess",
                password: "Abc12345"
            });
    });
    test.skip("'Delete user by ID' route returns a acknowledgment msg", async() => {
        // DELETE localhost:3000/users/:id
        let targetUserId = '1'
        const response = await request(app)
            .delete("/users/" + targetUserId)
            .send({
                username: "Jess",
                password: "Abc12345"
            });
    });
})