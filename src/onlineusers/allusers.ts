import jwt from 'jsonwebtoken'
import { Pool, QueryResult } from 'pg';
import bodyParser = require('body-parser');

export function getList(req, res) {

  let pool = new Pool({
    user: 'sandra',
    host: 'localhost',
    database: 'listausuarios',
    password: 'login',
    port: 5432,
  });

  let users: string[];
  users = [];
  pool.query('SELECT name, email FROM usuarios', (error, results) => {
    if(error) {
      throw error;
    } else {
      let finalResults = JSON.parse(JSON.stringify(results));
      users.push(finalResults.rows);
      res.json(users);
    }
  });
}
