const app = require('../app');   
const request = require("supertest");
const mongoose = require('mongoose');
const connectMongo = require('../mongoconnect');

beforeAll(() => {
    connectMongo();
});

afterAll(done => {
    mongoose.connection.close();
    console.log("After all is working after all");
    done();
})


describe("Testing if return full values", ()=> {
    test("Test/ if unauthorised access can be get order history", async() => {
        const response = await request(app).get("/order/newOrderForCurrentUser")
        expect(response.statusCode).toBe(401);
        expect(response.body.length).toBe(undefined);
    });
    
});



  