import { pool } from '../index';
import { verifyToken } from '../telalogin/token';


export function getList(req, res) {
  const token = req.headers.authorization;
  if(verifyToken(token, res)) {
    lisUsers(req.query.offset, req.query.numberResults, res);
  }
  else
    res.status(401).send('You\'re not able to continue');
}

function lisUsers(offset: number = 0, numberResults: number = 10, res) {
  pool.query('SELECT email, name FROM usuarios ORDER BY name LIMIT $1 OFFSET $2', [numberResults, offset], (error, results) => {
    if(error) {
      throw error;
    } else {
      res.json(results.rows);
    }
  });
}
