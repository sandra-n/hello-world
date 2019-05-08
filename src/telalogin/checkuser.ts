import { Pool } from 'pg';
import { calculateHash } from './hashing';
import { setToken } from './token';
import { queryErrors } from './errors';

export class AuthenticationMaker {
    pool: Pool;

    constructor (poolP: Pool) {
        this.pool = poolP;
    }

    verifyUser(email, senha, res) {
        var hashUser = calculateHash(senha);
    
        this.pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashUser], (error, results) => {
            if (queryErrors(error, results, res)){
                console.log(setToken(email));
            }
        })
    }
}