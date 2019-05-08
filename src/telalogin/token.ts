import jwt = require('jsonwebtoken');

export function setToken (email: string): string {
    const header = {
        "alg": "HS256",
        "typ": "JWT"
    }
    const payload = {
        "name": email
    }
    const secret = 'umafrasequalquerparateste';
    return jwt.sign (payload, secret, {expiresIn: 1000});
}