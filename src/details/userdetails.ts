import { pool } from '../index';
import { verifyToken } from '../telalogin/token';

export function detailUser(req, res) {

  let id: number = Number(req.params.id);
  const token = req.headers.authorization;

  if(verifyToken(token, res)) {
    pool.query('SELECT name, email, cpf, birthDate, role FROM usuarios LIMIT 1 OFFSET $1', [id], (error, results) => {
      if(error) {
        return error;
      } else {
        res.json(results.rows);
      }
    });
    //nao emite hash
  }
  else {
    res.status(401).send('You\'re not able to continue');
  }
}
