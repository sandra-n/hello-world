import { calculateHash } from '../project-api/login/calculate-hash';
import { setToken } from '../project-api/tokens/token';
import { setRefreshToken } from '../project-api/refreshtoken/refreshtoken';
import { pool } from '../project-view';

export function logUser(email: string, password: string) { //Use Case
  const hashUser = calculateHash(password);
  if(checkUserLogin(email, hashUser)) {
    createTokens(email);
  }
}

async function checkUserLogin(email: string, hashUser: string): Promise<boolean> {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashUser]);
    return result.rowCount > 0;
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
