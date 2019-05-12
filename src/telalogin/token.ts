import jwt = require('jsonwebtoken');
//import jwt from 'jsonwebtoken';

const secret = 'umafrasequalquerparateste';
export function setToken (email: string): string {
    const header = {
        "alg": "HS256",
        "typ": "JWT"
    }
    const payload = {
        "email": email
    }
    return jwt.sign (payload, secret, {expiresIn: 1000});
}