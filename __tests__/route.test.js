const app = require('../app');   
const request = require("supertest");

describe("Testing all the routes", () => {
    test("Testing shopitems", done => {
        request(app)
          .get("/shopitem/test")
          .then(response => {
            expect(response.statusCode).toBe(200);
            done();
          });
      });

      test("Testing orders", done => {
        request(app)
          .get("/order")
          .then(response => {
            expect(response.statusCode).toBe(401);
            done();
          });
      });

      test("Testing shopitems", done => {
        request(app)
          .get("/user/test")
          .then(response => {
            expect(response.statusCode).toBe(200);
            done();
          });
      });
  });