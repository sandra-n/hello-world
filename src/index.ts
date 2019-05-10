import express = require('express');
import bodyParser = require('body-parser');
import { performLogin } from './telalogin/login';
import { getList } from './onlineusers/allusers';
import { Pool } from 'pg';

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
//let obj = new OnlineUsersList();

app.post('/login', performLogin);
app.get('/users', getList);

app.listen(8080, function(){
  console.info('Running in port 8080!');
});
