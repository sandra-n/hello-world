import jwt from 'jsonwebtoken';
import { pool } from '../';

const refreshSecret: string = "senhaparaorefresh";

export function setRefreshToken(email: string): string {
  const payload = {
    "email": email
  }
  const userRefreshToken = jwt.sign(payload, refreshSecret, {expiresIn: '50m'}); //50 min
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


export function verifyRefreshToken(refreshToken: string, res, ): Promise<boolean> {
  const splitToken = (refreshToken.split(" ", 2))[1];
  console.log(splitToken);

  let answer: boolean = false;

  return new Promise((resolve, reject) => {
    jwt.verify(splitToken, refreshSecret, function(error, decoded) {
      if(error) {
        res.status(401);
        console.log('deu erro');
        resolve(false);
      }
      else {
        console.log('deu bom');
        resolve(true);
      }
    });
  })
}
