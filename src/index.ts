import express = require('express');
import bodyParser = require('body-parser');
import { performLogin } from './telalogin/login';
import { Pool } from 'pg';
import { getList } from './onlineusers/allusers';
import { detailUser } from './details/userdetails';
import { receiveInfo } from './signup/userinfo';

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
app.get('/users', getList); //'/users?offset={}&numberResults={}'
app.get('/details/:id', detailUser);
app.post('/signup', receiveInfo);

app.listen(8080, function(){
  console.info('Running in port 8080!');
});

