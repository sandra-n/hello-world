import { pool } from '../project-view/index';
import { setToken } from '../project-api/tokens/token';
import { setRefreshToken, verifyRefreshToken } from '../project-api/refreshtoken/refreshtoken';

export function reauthenticate(req, res) {
  const refreshToken = req.headers.authorization;

  pool.query('SELECT email FROM usuarios WHERE refreshToken = $1', [refreshToken], async (error, results) => {
    if(error){
      return error;
    } else {
      const email = JSON.stringify(results.rows);
      if(await verifyRefreshToken(refreshToken, res)) {
        let userToken = setToken(email);
        let userRefreshToken = setRefreshToken(email);
        res.json('Access Token: '+userToken+', Refresh Token: '+userRefreshToken);
      }
    }
  });
}
