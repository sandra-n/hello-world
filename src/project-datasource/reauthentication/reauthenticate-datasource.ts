import { pool } from '../../project-view';
import { verifyRefreshToken, setRefreshToken } from '../../project-api/refreshtoken/refreshtoken';
import { setToken } from '../../project-api/tokens/token';

export function reauthenticateDatasource(res, refreshToken: string){
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
