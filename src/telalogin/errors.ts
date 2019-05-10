import { QueryResult } from "pg";
import { setToken, verifyToken } from './token';
import { tokensList } from '../index'
import { addInList } from '/Users/taqtile/hello-world/src/onlineusers/findusers'

export function queryErrors (error: Error,results: QueryResult, res, email: string, hash: string) : boolean{
  if (error) {
    throw error;
  }

  if (results.rowCount == 0) {
      res.status(401).json();
      return false;
  } else {
    let userToken = setToken(email);
    console.log('token: ' + userToken);
    tokensList.push(userToken);
    //addInList(res, userToken, email, hash);
    console.log('olaa'+ verifyToken(userToken));
    console.log('lista: '+tokensList);
    res.status(200).json(userToken);
    return true;
  }
}
