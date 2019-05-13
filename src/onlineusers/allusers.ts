import { pool } from '../index';
import { verifyToken } from '../telalogin/token';

export function getList(req, res) {

  let offset: number = Number(req.query.offset);
  if (!offset) {
    offset = 0;
  }
  let numberResults: number = Number(req.query.numberResults);
  if (!numberResults){
    numberResults = 10;
  }

  if(verifyToken(req, res) == true) {
    pool.query('SELECT email, name FROM usuarios ORDER BY name LIMIT $1 OFFSET $2', [numberResults, offset], (error, results) => {
      if(error) {
        throw error;
      } else {
        res.json(results.rows);
      }
    });
  }
  else
    res.status(401).send('You\'re not able to continue');
}
