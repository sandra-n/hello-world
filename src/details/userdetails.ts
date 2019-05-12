import { pool } from '../index';

export function detailUser(req, res) {

  let id: number = Number(req.query.id);
  pool.query('SELECT name, email, cpf, birthDate, role FROM usuarios ORDER BY name LIMIT 1 OFFSET $1', [id], (error, results) => {
    if(error) {
      return error;
    } else {
      res.json(results.rows);
    }
  });
  //nao emite hash
}
