import { QueryResult } from "pg";
import { setToken } from '../tokens/token';
import { tokensList } from '../../project-view';
import { setRefreshToken } from "../refreshtoken/refreshtoken";

export async function loginValidation (error: Error, results: QueryResult, res, email: string) : Promise<boolean>{
  if (error) {
    throw error;
  }

  if (results.rowCount == 0) {
    res.status(401).json();
    return false;
  } else {
    let userToken = setToken(email);
    let userRefreshToken = await setRefreshToken(email);
    tokensList.push(userToken);
    res.status(200).json('oi', userToken, userRefreshToken);
    return true;
  }
}
