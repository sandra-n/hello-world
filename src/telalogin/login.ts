import { logUser } from './checkuser';

export function performLogin(req, res){ //View
    const emailGiven = req.body.email;
    const pwGiven = req.body.password;

    logUser(emailGiven, pwGiven);
}
