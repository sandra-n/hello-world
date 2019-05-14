import { QueryResult } from "pg";
import { setToken } from './token';
import { tokensList } from '../'
import { setRefreshToken } from "../refreshtoken/refreshtoken";

export function queryErrors (error: Error, results: QueryResult, res, email: string) : boolean{
  if (error) {
    throw error;
  }

  if (results.rowCount == 0) {
    res.status(401).json();
    return false;
  } else {
    let userToken = setToken(res, email);
    setRefreshToken(res, email);
    tokensList.push(userToken);
    res.status(200).json(userToken);
    return true;
  }
}
