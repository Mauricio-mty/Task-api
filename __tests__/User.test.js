const request= require("supertest");
const app=require("../index");

describe("Pruebas user api",()=>{
    it("Get /user devolver status 200",async()=>{
        const res = await request(app).get("/user");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});