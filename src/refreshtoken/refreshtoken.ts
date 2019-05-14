import jwt from 'jsonwebtoken';
import { pool } from '../';

const refreshSecret: string = "senhaparaorefresh";

export function setRefreshToken(res, email: string): string {
  const payload = {
    "email": email
  }
  const userRefreshToken = jwt.sign(payload, refreshSecret, {expiresIn: 3000}); //50 min
  pool.query('UPDATE usuarios SET refreshToken = $1 WHERE email = $2', [userRefreshToken, email], (error, results) => {
    if(error) {
      return error;
    }
    else {
      return results;
    }
  });
  return userRefreshToken;
}


export function verifyRefreshToken(refreshToken: string, res): boolean {
  const splitToken = (refreshToken.split(" ", 2))[1];
  console.log(splitToken);

  let answer: boolean = false;

  jwt.verify(splitToken, refreshSecret, function(error, decoded) {
    if(error) {
      res.status(401);
      answer = false;
      return error;
    }
    else {
      answer = true;
      return decoded;
    }
  });
  return answer;
}
