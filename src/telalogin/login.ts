import { AuthenticationMaker } from './checkuser';
import { Pool } from 'pg';

export function performLogin(req, res){
    const emailGiven = req.body.email;
    const pwGiven = req.body.password;

    let pool = new Pool({
        user: 'sandra',
        host: 'localhost',
        database: 'listausuarios',
        password: 'login',
        port: 5432,
    });

    let objAM = new AuthenticationMaker(pool);
    objAM.verifyUser(emailGiven, pwGiven, res);
    
}
