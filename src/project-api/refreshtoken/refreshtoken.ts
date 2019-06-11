//import jwt from 'jsonwebtoken';
import jwt = require('jsonwebtoken');
//import { userRepo } from '../../project-datasource/login/login';
import { resolve } from 'path';
import { getConnection } from 'typeorm';
import { User } from '../../entity/User';
//import { pool } from '../../project-view/';

const refreshSecret: string = "senhaparaorefresh";

export async function setRefreshToken(email: string): Promise<string> {
  const userRepo = getConnection().getRepository(User);
  const payload = {
    email
  }
  const userRefreshToken = jwt.sign(payload, refreshSecret, {expiresIn: 500000}); //50 min

  const result = await userRepo.findOne({
    email: email
  });
  result.refreshToken = userRefreshToken;
  await userRepo.save(result);

  return userRefreshToken;
  /*pool.query('UPDATE usuarios SET refreshToken = $1 WHERE email = $2', [userRefreshToken, email], (error, results) => {
    if(error) {
      return error;
    }
    else {
      return results;
    }
  });
  console.log(userRefreshToken);
  return userRefreshToken;
  */
}


export async function verifyRefreshToken(refreshToken: string, res): Promise<boolean> {
  console.log(refreshToken);

  let answer: boolean = false;

  return new Promise((resolve, reject) => {
    jwt.verify(refreshToken, refreshSecret, function(error, decoded) {
      if(error) {
        res.status(401);
        resolve(false);
      }
      else {
        resolve(true);
      }
    });
  })
}
