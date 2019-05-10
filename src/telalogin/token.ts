import jwt = require('jsonwebtoken');
import { QueryResult } from 'pg';
import { stringify } from 'querystring';
//import jwt from 'jsonwebtoken';

const secret = 'umafrasequalquerparateste';
export function setToken(email: string): string {
  const header = {
    "alg": "HS256",
    "typ": "JWT"
  }
  const payload = {
    "email": email
  }
  return jwt.sign(payload, secret, {expiresIn: 5});
}

export function verifyToken(token: string): string {
  const obj = jwt.verify(token, secret, function(error, decoded) {
    if (error)
      return error;
    else {
      return decoded;
    }
  })
  return JSON.stringify(obj);
  //console.log ('obj: ' + JSON.stringify(obj));


}
