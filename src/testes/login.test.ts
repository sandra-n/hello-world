import { dbSetup, serverSetup } from "../project-view/db-setup";
import { Connection, getRepository } from "typeorm";
import { Server } from "http";
import { app } from '../project-view'
import { User } from "../entity/User";

let con: Connection;
let ser: Server;

const req = require('supertest');

beforeAll(async() => {
  con = await dbSetup();
  ser = serverSetup();
})

afterAll(async() => {
  con.close();
  ser.close();
})

test('testing users list route', async(done) => {
  getRepository(User);
  req(app).post('/login')
    //.set() header
    .send({email: 'neymar.jr@taqtile.com', password:'0205'}) //body
  .then((response) => {
    console.log(response);
    expect(response.statusCode).toBe(200);
    done();
  })
})
