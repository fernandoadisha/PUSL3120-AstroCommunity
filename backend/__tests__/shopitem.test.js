const app = require('../app');   
const request = require("supertest");
const mongoose = require('mongoose');
const connectMongo = require('../mongoconnect');

beforeAll(async() => {
    await connectMongo(); // connecting to mongodb
    console.log(mongoose.connection.readyState); // printing status of the mongo
});

afterAll(done => {
  mongoose.connection.close(); //closing connection
  console.log(mongoose.connection.readyState);
  done();
})


describe("Testing if return full values", ()=> {

  test("Test/ Getting all shop items and there body values", async() => {
    const response = await request(app).get("/shopitem/api/items")
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
  });

  test("Test/ Getting one item from store and there body values", async() => {
   const response=  await request(app).get("/shopitem/api/items/tags");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
  });

  /*
  test("Test/ Getting all shop items", async() => {
    await request(app)
      .get("/shopitem/api/items")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect()
      });
  });

  test("Test/ Getting one item from store", async() => {
    await request(app)
      .get("/shopitem/api/items/tags")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
*/
});

describe("Test/ Getting values by search term and tags", () => {

  test("Test/ Testing if tags works but don't return with false tag values", async() => {
    const response = await request(app).get("/shopitem/api/items/tags/NotRealTags");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBe(0);
  });
  
  test("Test/ Teseting if  values work but don't return with false search terms", async() => {
    const response = await request(app).get("/shopitem/api/items/search/NotRealSearchTerm");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBe(0);
  });

  test("Test/ Teseting if tags values get returned proeprly with valid tag values", async() => {
    const response = await request(app).get("/shopitem/api/items/tags/Toy");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
  });

  test("Test/ Teseting if search values get returned proeprly with valid search terms", async() => {
    const response = await request(app).get("/shopitem/api/items/search/Toy");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
  });
  
});

/*********************************** */

describe("Test all the routes", () => {
  test("Testing shopitems router connection", async() => {
    const response = await request(app).get("/shopitem/test")
      expect(response.statusCode).toBe(200);
  });

  test("Testing if orders connection and unautheorised status", async() => {
    const response = await request(app).get("/order")
      expect(response.statusCode).toBe(401);
  });

  test("Testing shopitems connection", async() => {
    const response = await request(app).get("/user/test")
      expect(response.statusCode).toBe(200);
  });

});

/************************************************* */

describe("Testing if return full values", ()=> {
  test("Test/ if unauthorised access can be get order history", async() => {
      const response = await request(app).get("/order/newOrderForCurrentUser")
      expect(response.statusCode).toBe(401);
      expect(response.body.length).toBe(undefined);
  });
  
});



