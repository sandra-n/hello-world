import { QueryResult } from "pg";
import { setToken } from './token';

export function queryErrors (error: Error,results: QueryResult, res, email: string) : boolean{
    if (error){
        throw error;
    }
    if (results.rowCount == 0){
        res.status(401).json();
        return false;
    }
    else{
        let userToken = setToken(email);
        console.log(userToken);
        res.status(200).json(userToken);
        return true;
    }
}