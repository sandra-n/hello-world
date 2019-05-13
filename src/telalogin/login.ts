import { AuthenticationMaker } from './checkuser';
import { pool } from '../';

export function performLogin(req, res){
    const emailGiven = req.body.email;
    const pwGiven = req.body.password;

    let objAM = new AuthenticationMaker(pool);
    objAM.verifyUser(emailGiven, pwGiven, req, res);

}
