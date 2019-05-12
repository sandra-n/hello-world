import { pool } from '../index';

export function getList(req, res) {

  pool.query('SELECT name, email FROM usuarios', (error, results) => {
    if(error) {
      throw error;
    } else {
      res.json(results.rows);
    }
  });
}
