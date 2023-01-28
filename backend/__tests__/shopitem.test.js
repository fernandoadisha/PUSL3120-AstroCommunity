const app = require('../app');   
const request = require("supertest");
//const { expect } = require('chai');

describe("Testing if return full values", ()=> {

  test("Test/ Getting all shop items", async() => {
    const response = await request(app).get("/shopitem/api/items")
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
  });

  test("Test/ Getting one item from store", async() => {
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

  test("Test/ Testing if tags works but don't return ", async() => {
    const response = await request(app).get("/shopitem/api/items/tags/NotRealTags");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBe(0);
  });
  
  test("Test/ Teseting if  values work but don't return", async() => {
    const response = await request(app).get("/shopitem/api/items/search/NotRealSearchTerm");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBe(0);
  });

  test("Test/ Teseting if tags values get returned proeprly", async() => {
    const response = await request(app).get("/shopitem/api/items/tags/Toy");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
  });

  test("Test/ Teseting if search values get returned proeprly", async() => {
    const response = await request(app).get("/shopitem/api/items/search/Toy");
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
  });
  
});
