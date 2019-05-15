import { calculateHash } from './hashing';
import { setToken } from './token';
import { setRefreshToken } from '../refreshtoken/refreshtoken';
import { pool } from '../';

export function logUser(email: string, password: string) { //Use Case
  const hashUser = calculateHash(password);
  if(checkUserLogin(email, hashUser)) {
    createTokens(email);
  }
}

function checkUserLogin(email: string, hashUser: string): boolean { //Datasource
  let flag: boolean = false;
  pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashUser], (error, results) => {
    if(error) {
      flag = false;
      return error;
    } else {
      flag = true;
    }
  });
  return flag;
}

function createTokens(email: string) { //"Use Case"
  setToken(email);
  setRefreshToken(email);
}
