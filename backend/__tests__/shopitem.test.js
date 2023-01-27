const app = require('../app');   
const request = require("supertest");

describe("Testing shopitem", ()=> {

  test("Test/ Getting all shop items", async() => {
    request(app)
      .get("/shopitem/api/items")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Test/ Getting all the tags", async() => {
    request(app)
      .get("/shopitem/api/items/tags")
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });

  test("Test/ Getting one item from store", async() => {
    request(app)
      .get("/shopitem/api/items/tags")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
})