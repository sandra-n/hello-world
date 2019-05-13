import { pool } from '../';
import { calculateHash } from './hashing';
import { queryErrors } from './errors';

export class AuthenticationMaker {

  verifyUser(email, password, res) {
    var hashUser = calculateHash(password);

    pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashUser], (error, results) => {
        queryErrors(error, results, res, email, hashUser);
    })
  }
}
