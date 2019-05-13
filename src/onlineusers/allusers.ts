import { pool } from '../';

export function getList(req, res) {

  let fromA: number = Number(req.query.fromA);
  if (isNaN(fromA)) {
    fromA = 0;
  }
  let numberResults: number = Number(req.query.numberResults);
  if (isNaN(numberResults)){
    numberResults = 10;
  }

  pool.query('SELECT email, name FROM usuarios ORDER BY name LIMIT $1 OFFSET $2', [numberResults, fromA], (error, results) => {
    if(error) {
      throw error;
    } else {
      res.json(results.rows);
    }
  });
}
