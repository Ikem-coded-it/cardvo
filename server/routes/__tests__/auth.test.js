const supertest = require("supertest");
const app = require("../../app");

describe("tests auth routes", () => {
  test("resturns response statuscode of 200", async () => {
    const response = await request(app).post("/api/v1/auth/register").send({
      full_name: "myman",
      pass_word: "myman123",
      email: "myman@gmail.com",
      created_at:new Date().toISOString()
    })
    
    expect(response.statusCode).toBe(201);
  })
})