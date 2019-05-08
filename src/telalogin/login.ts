import { AuthenticationMaker } from './checkuser';
import { Pool } from 'pg';

export function performLogin(req, res){
    let emailGiven: string;
    let senhaGiven: string;

    emailGiven = req.body.email;
    senhaGiven = req.body.senha;

    let pool = new Pool({
        user: 'sandra',
        host: 'localhost',
        database: 'listausuarios',
        password: 'login',
        port: 5432,
    });

    let objAM = new AuthenticationMaker(pool);
    objAM.verifyUser(emailGiven, senhaGiven, res);
    
}
