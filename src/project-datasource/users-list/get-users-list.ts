import { pool } from '../../project-view/'

export function getUsersInList(offset: number = 0, numberResults: number = 10, res) {
  pool.query('SELECT email, name FROM usuarios ORDER BY name LIMIT $1 OFFSET $2', [numberResults, offset], (error, results) => {
    if(error) {
      throw error;
    } else {
      res.json(results.rows);
    }
  });
}
