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

async function checkUserLogin(email: string, hashUser: string): Promise<boolean> { //Datasource
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashUser]);
    console.log(result);
    return false;
  // let flag: boolean = false;
  // pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashUser], (error, results) => {
  //   if(error) {
  //     flag = false;
  //     return error;
  //   } else {
  //     flag = true;
  //   }
  // });

  // return flag;
}

function createTokens(email: string) { //"Use Case"
  setToken(email);
  setRefreshToken(email);
}
