import { verifyToken } from "../tokens/token";
import { getUsersInList } from "../../project-datasource/users-list/get-users-list";

export function getUsersListAPI(res, token: string, offset: number, numberResults: number) {
  if(verifyToken(token, res)) {
    getUsersInList(offset, numberResults, res);
  }
  else
    res.status(401).send('You\'re not able to continue');
}
