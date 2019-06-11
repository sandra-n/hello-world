import { Connection, getConnection } from 'typeorm';
import { dbSetup, serverSetup } from "../project-view/db-setup";
import { User } from '../entity/User';
import { Tag } from '../entity/Tag';

let con: Connection;
let ser: any;

beforeAll (async() => {
  console.log('beforeAll do simple test');
  // con = await dbSetup();
  // ser = serverSetup();
})


afterAll (async() => {
  // con.close();
  // ser.close();
})

test('teste qualquer', () => {
  // const userRepo = getConnection().getRepository(User);
  // const tagRepo = getConnection().getRepository(Tag);
  console.log('passou no teste simples')
  expect(5+5).toBe(10);
})
