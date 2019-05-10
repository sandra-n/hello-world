import jwt from 'jsonwebtoken'
import { Pool, QueryResult } from 'pg';
import bodyParser = require('body-parser');

export function getListFrom(req, res) {

  let fromA: number = Number(req.params.fromA);
  let numberResults: number = Number(req.params.numberResults);

  let pool = new Pool({
    user: 'sandra',
    host: 'localhost',
    database: 'listausuarios',
    password: 'login',
    port: 5432,
  });

  let users: string[];
  users = [];
  pool.query('SELECT * FROM (SELECT email, name, ROW_NUMBER() OVER (ORDER BY name) AS rownumb FROM usuarios) x WHERE rownumb BETWEEN $1 AND $2', [fromA, fromA+numberResults], (error, results) => {
    if(error) {
      throw error;
    } else {
      let finalResults = JSON.parse(JSON.stringify(results));
      users.push(finalResults.rows);
      res.json(users);
    }
  });
}
