import { registerUserDatasource } from '../project-datasource/register-user/register-user';
import { UserSignedUp } from '../project-api/user/user-signed-up'
import { dbSetup, serverSetup, userRepo } from '../project-view/db-setup';
import { resolve } from 'url';
import { app } from '../project-view';
import { Server } from 'https';
import { Connection, getConnection, getRepository } from "typeorm";
import { User } from '../entity/User'
//import { dbSetup } from '../project-view/db-setup';

const user = new UserSignedUp('Brendon Urie', 'brendon.urie@taqtile.com', '12345678901', '1990-01-01', 'pass', 'admin');
let con: Connection;
let ser: any;

test('testing creation of new user', async (done) => {
  const f = await getConnection().manager.find(User)
  console.log(f)
  //con.getRepository('user');
  getRepository(User);
  console.log(await registerUserDatasource(user))
  //expect(await registerUserDatasource(user)).toBe('12345678901');
  done();





  //const f = await getConnection().manager.find(User)
  //console.log(f)
  //done();
});

beforeAll(async() => {
  con = await dbSetup();
  ser = serverSetup();
})

afterAll(async() => {
  con.close();
  ser.close();
})
