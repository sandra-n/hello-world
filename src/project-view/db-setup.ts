import "reflect-metadata";
import { createConnection, getConnection, Repository, Connection, Server, getRepository } from "typeorm";
import { User } from "../entity/User";
import { app } from '../project-view/index';


export let userRepo: Repository<User>;

export async function dbSetup(): Promise<Connection> {
  let con = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "sandra",
    password: "login",
    database: "listausuarios",
    entities: [User],
    synchronize: true,
    logging: false
  })
  // getConnection().getRepository(User);
  userRepo = getConnection().getRepository(User);
  return con;
  //initialize();
  /*.then(async connection => {
    initialize();
    console.log("Connected with database.");
    return con;
  }).catch(error => console.log(error));*/

  /*const initialize = () => {
    userRepo = getConnection().getRepository(User);
  }*/
}

export function serverSetup() {
  const serv = app.listen(8080, function () {
    console.info('Running in port 8080!');
  });
  return serv;
}
