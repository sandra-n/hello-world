import { pool } from '../../project-view/';
import { verifyToken } from '../../project-api/tokens/token';

export async function getUserDetails(id, token, res) {

  if(await verifyToken(token, res)) {
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
