// import { registerUserDatasource } from '../project-datasource/register-user/register-user';
// import { UserSignedUp } from '../project-api/user/user-signed-up'
// import { dbSetup, serverSetup } from '../project-view/db-setup';
// import { resolve } from 'url';
// import { app } from '../project-view';
// import { Server } from 'https';
// import { Connection, getConnection, getRepository } from "typeorm";
// import { User } from '../entity/User'
// import { Tag } from '../entity/Tag';
// //import { dbSetup } from '../project-view/db-setup';


// describe('create user view', () => {

//   beforeAll(async () => {
//     //console.log('sandra');
//     con = await dbSetup();
//     //console.log(con, 'lalalalm')
//     ser = serverSetup();
//   })

//   afterAll(async () => {
//     con.close();
//     ser.close();
//   })

//   console.log('funciona pls');
//   const user = new UserSignedUp('Brendon Urie', 'brendon.urie@taqtile.com', '12345678901', '1990-01-01', 'pass', 'admin');
//   let con: Connection;
//   let ser: any;

//   test('testing creation of new user', async (done) => {
//     console.log('testando');
//     con.getRepository(User);
//     //const f = await getConnection().manager.find(User)
//     //console.log(f)
//     //con.getRepository('user');
//     //await registerUserDatasource(user);
//     expect(await registerUserDatasource(user)).toBe('12345678901');
//     done();


//     //const f = await getConnection().manager.find(User)
//     //console.log(f)
//     //done();
//   });

// });
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
