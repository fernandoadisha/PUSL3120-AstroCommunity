const app = require('../app');   
const request = require("supertest");

describe("Test all the routes", () => {
  test("Testing shopitems", async() => {
    const response = await request(app).get("/shopitem/test")
      expect(response.statusCode).toBe(200);
  });

  test("Testing if orders send unautheorised status", async() => {
    const response = await request(app).get("/order")
      expect(response.statusCode).toBe(401);
  });

  test("Testing shopitems", async() => {
    const response = await request(app).get("/user/test")
      expect(response.statusCode).toBe(200);
  });

});