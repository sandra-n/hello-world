import { QueryResult } from "pg";

export function queryErrors (error: Error,results: QueryResult, res) : boolean{
    if (error){
        throw error;
    }
    if (results.rowCount == 0){
        res.status(401).json();
        return false;
    }
    else{
        res.status(200).send(results.rows);
        return true;
    }
}