import { calculateHash } from './hashing';
import { queryErrors } from './errors';
import { pool } from '../index';

export class AuthenticationMaker {
  verifyUser(email, password, res) {
    var hashUser = calculateHash(password);
    console.log('hashUser: '+hashUser);

    pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashUser], (error, results) => {
      queryErrors(error, results, res, email, hashUser);
    })
  }
}
