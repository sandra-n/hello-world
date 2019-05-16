import express = require('express');
import bodyParser = require('body-parser');
import { performLogin } from './login/perform-login';
import { Pool } from 'pg';
import { createUserView } from './create-user/create-user-view';
import { reauthenticateView } from './reauthentication/reauthenticate-view';
import { detailedUser } from './user-details/detailed-user';
import { getUsersListView } from './users-list/get-users-list-view';

const app: express.Application = express();
app.use(bodyParser.json())

export let pool = new Pool({
  user: 'sandra',
  host: 'localhost',
  database: 'listausuarios',
  password: 'login',
  port: 5432,
});

export let tokensList: string[] = [];

app.post('/login', performLogin);
app.get('/users', getUsersListView); //'/users?offset={}&numberResults={}'
app.get('/details/:id', detailedUser);
app.post('/signup', createUserView);
app.post('/reauthenticate', reauthenticateView);

app.listen(8080, function(){
  console.info('Running in port 8080!');
});

