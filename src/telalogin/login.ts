import { AuthenticationMaker } from './checkuser';

export function performLogin(req, res){
    const emailGiven = req.body.email;
    const pwGiven = req.body.password;

    let objAM = new AuthenticationMaker();
    objAM.verifyUser(emailGiven, pwGiven, res);

}
