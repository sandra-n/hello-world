import express = require('express');
import bodyParser = require('body-parser');
import { performLogin } from './login/perform-login';
import { Pool } from 'pg';
import { createUserView } from './create-user/create-user-view';
import { reauthenticateView } from './reauthentication/reauthenticate-view';
import { detailedUser } from './user-details/detailed-user';
import { getUsersListView } from './users-list/get-users-list-view';
import "reflect-metadata";


export const app: express.Application = express();
app.use(bodyParser.json())

/*export let pool = new Pool({
  user: 'sandra',
  host: 'localhost',
  database: 'listausuarios',
  password: 'login',
  port: 5432,
});
*/

export let tokensList: string[] = [];

app.post('/login', performLogin);
app.get('/users', getUsersListView); //'/users?offset={}&numberResults={}'
app.get('/details/:id', detailedUser);
app.post('/signup', createUserView);
app.post('/reauthenticate', reauthenticateView);

/*app.listen(8080, function(){
  console.info('Running in port 8080!');
});
*/
/*createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "sandra",
  password: "login",
  database: "listausuarios",
  entities: [User],
  synchronize: true,
  logging: false
}).then(async connection => {

    console.log("Inserting a new user into the databaaaaase...");
    const user = new User();
    user.name = "Timber Saw";
    user.email = "timber.saw@taqtile.com";
    user.cpf = "99999999999";
    user.birthDate = "01-01-2001";
    user.role = "admin";
    user.hash = "asdf123";
    user.refreshToken = "iyewudhx";
    console.log(user);
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
*/

