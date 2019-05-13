import jwt = require('jsonwebtoken');
import { QueryResult } from 'pg';
import { stringify } from 'querystring';
//import jwt from 'jsonwebtoken';

const secret = 'umafrasequalquerparateste';
export function setToken(email: string): string {
  const payload = {
    "email": email
  }
  return jwt.sign(payload, secret, {expiresIn: 30});
}

export function verifyToken(req, res): boolean {

  const token: string = req.headers.authorization;
  console.log(JSON.stringify(token));
  const splitToken = (token.split(" ", 2))[1];
  console.log('esse eh o token '+splitToken);

  let answer: boolean = false;

  jwt.verify(splitToken, secret, function(error, decoded) {
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


/*export function verifyToken(token: string): string {
  const obj = jwt.verify(token, secret, function(error, decoded) {
    if (error)
      return error;
    else {
      return decoded;
    }
  })

  return JSON.stringify(obj);
}
*/
