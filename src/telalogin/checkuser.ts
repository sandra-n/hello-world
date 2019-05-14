import { Pool } from 'pg';
import { calculateHash } from './hashing';
import { loginValidation } from './loginvalidation';

export class AuthenticationMaker {
    pool: Pool;

    constructor (poolP: Pool) {
        this.pool = poolP;
    }

    verifyUser(email, password, res) {
        var hashUser = calculateHash(password);

        this.pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashUser], (error, results) => {
            loginValidation(error, results, res, email);
        })
    }
}
