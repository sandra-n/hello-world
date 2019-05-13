import jwt = require('jsonwebtoken');
//import jwt from 'jsonwebtoken';

const secret = 'umafrasequalquerparateste';
export function setToken(email: string): string {
  const payload = {
    "email": email
  }
  return jwt.sign(payload, secret, {expiresIn: 5});
}

export function verifyToken(token: string) {
  const obj = jwt.verify(token, secret, function(error, decoded) {
    if (error)
      return error;
    else {
      return decoded;
    }
  })
  return obj;
}
