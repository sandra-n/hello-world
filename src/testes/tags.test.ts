import { dbSetup, serverSetup } from "../project-view/db-setup";
import { Connection, getRepository, getConnection } from "typeorm";
import { Server } from "http";
import { app } from '../project-view'
import { User } from "../entity/User";
import { Tag } from "../entity/Tag";
import * as req from 'supertest';
import { UserSignedUp } from "../project-api/user/user-signed-up";
import { registerUserDatasource } from "../project-datasource/register-user/register-user";
import { response } from "express";


describe('show tags', () => {

  let con: Connection;
  let ser: Server;

  // let token: string;
  const bearer = 'Bearer ';

  beforeAll(async() => {
    con = await dbSetup();
    ser = serverSetup();
  })

  afterAll(async() => {
    await con.close();
    await ser.close();
  })

  test('testing users list route', async(done) => {
    let token: string;
    con.getRepository(User);
    con.getRepository(Tag);
    await req(app).post('/login')
      .send({email: 'neymar.jr@taqtile.com', password:'0205'}) //body
      .then((response) => {
        token = bearer.concat(response.body);
        console.log(token);
        expect(response.statusCode).toBe(200);
      });
    console.log(token);
    req(app).get('/details/13')
      .set('Authorization', token) //header
      .then((response) => {
        console.log(response);
        expect(response.statusCode).toBe(200);
        done();
    })
  })

  // test('testing users list route with error', async(done) => {
  //   let token: string;
  //   con.getRepository(User);
  //   con.getRepository(Tag);
  //   await req(app).post('/login')
  //     .send({email: 'neymar.jr@taqtile.com', password:'0205'}) //body
  //     .then((response) => {
  //       token = bearer.concat(response.body);
  //       console.log(token);
  //       expect(response.statusCode).toBe(200);
  //     });
  //   console.log(token);
  //   req(app).get('/details')
  //     .set('Authorization', token) //header
  //     .then((response) => {
  //       expect(response.statusCode).rejects.toThrow('error');
  //       done();
  //   })
  // })

  console.log('funciona pls');
  const user = new UserSignedUp('Brendon Urie', 'brendon.urie@taqtile.com', '12345678901', '1990-01-01', 'pass', 'admin');

  test('testing creation of new user', async (done) => {
    console.log('testando');
    con.getRepository(User);
    expect(await registerUserDatasource(user)).toBe('12345678901');
    done();
  });

  test('testing users login route', async(done) => {
    con.getRepository(User);
    con.getRepository(Tag);
    req(app).post('/login')
      //.set() header
      .send({email: 'neymar.jr@taqtile.com', password:'0205'}) //body
    .then((response) => {
      //console.log(response);
      expect(response.statusCode).toBe(200);
      done();
    })
  })

})
