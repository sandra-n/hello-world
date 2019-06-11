// import { dbSetup, serverSetup } from "../project-view/db-setup";
// import { Connection, getRepository, getConnection, Repository } from "typeorm";
// import { Server } from "http";
// import { app } from '../project-view'
// import { User } from "../entity/User";
// import * as req from 'supertest';
// import { Tag } from "../entity/Tag";


// describe('try login', () => {

//   let con: Connection;
//   let ser: Server;

//   let userRepo: Repository<User>;
//   let tagRepo: Repository<Tag>;

//   beforeAll(async() => {
//     console.log('before all fake');
//     con = await dbSetup();
//     ser = serverSetup();
//   })

//   afterAll(async() => {
//     con.close();
//     ser.close();
//   })

//   test('testing users list route', async(done) => {
//     con.getRepository(User);
//     con.getRepository(Tag);
//     req(app).post('/login')
//       //.set() header
//       .send({email: 'neymar.jr@taqtile.com', password:'0205'}) //body
//     .then((response) => {
//       //console.log(response);
//       expect(response.statusCode).toBe(200);
//       done();
//     })
//   })
// })
import { Connection, getConnection } from 'typeorm';
import { dbSetup, serverSetup } from "../project-view/db-setup";
import { User } from '../entity/User';
import { Tag } from '../entity/Tag';

let con: Connection;
let ser: any;

beforeAll (async() => {
  console.log('beforeAll do simple test');
})


afterAll (async() => {
})

test('teste qualquer', () => {
  console.log('passou no teste simples')
  expect(5+5).toBe(10);
})
