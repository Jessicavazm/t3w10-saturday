### Plans for today
- Jest discussion
- Write tests with the help of supertest
- Middleware - error handling
- How Github runs tests automatically


### JEST
Jest is a JavaScript testing framework developed by Meta (formerly Facebook). It is widely used for testing JavaScript applications, including Node.js, Express, React, and more.

Doc: https://jestjs.io/

- How to install: npm install --save-dev jest
- How to instal Jest & Supertest: npm install jest supertest --save-dev
- Ensure to look at the right documentation for the version you are working on.
- describe keyword: groups different case tests for the same function/ module.
- it keyword: used instead of 'test' keyword. (more readable way)


### SUPERTEST
Supertest is an NPM library designed for testing HTTP servers, particularly useful for testing ExpressJS APIs. It allows developers to simulate HTTP requests (GET, POST, PUT, DELETE, etc.) without needing to run a real server, making it ideal for automated testing. Supertest integrates seamlessly with Jest and other testing frameworks, enabling efficient validation of API responses, status codes, and request handling.

Doc: https://www.npmjs.com/package/supertest

- How to install: npm i supertest

