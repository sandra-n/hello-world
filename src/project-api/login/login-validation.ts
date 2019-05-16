import { QueryResult } from "pg";
import { setToken } from '../tokens/token';
import { tokensList } from '../../project-view';
import { setRefreshToken } from "../refreshtoken/refreshtoken";

export function loginValidation (error: Error, results: QueryResult, res, email: string) : boolean{
  if (error) {
    throw error;
  }

  if (results.rowCount == 0) {
    res.status(401).json();
    return false;
  } else {
    let userToken = setToken(email);
    setRefreshToken(email);
    tokensList.push(userToken);
    res.status(200).json(userToken);
    return true;
  }
}
