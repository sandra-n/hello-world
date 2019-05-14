import jwt = require('jsonwebtoken');
import { resolve } from 'dns';
//import jwt from 'jsonwebtoken';

const secret = 'umafrasequalquerparateste';

export function setToken(email: string): string {
  const payload = {
    "email": email
  }
  const token = jwt.sign(payload, secret, {expiresIn: '5m'});
  return token; //5 min
}

export function verifyToken(token: string, res): boolean {
  const splitToken = (token.split(" ", 2))[1];

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
  })
  return answer;

}

