import jwt = require('jsonwebtoken');
//import jwt from 'jsonwebtoken';

const secret = 'umafrasequalquerparateste';
export function setToken(email: string): string {
  const payload = {
    "email": email
  }
  return jwt.sign(payload, secret, {expiresIn: 300}); //5 min
}

export function verifyToken(req, res): boolean {

  const token: string = req.headers.authorization;
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
  });
  return answer;
}

