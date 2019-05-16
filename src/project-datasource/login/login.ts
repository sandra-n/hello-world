import { pool } from '../../project-view';

export async function checkUserLoginDatasource(email: string, hashUser: string): Promise<boolean> {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashUser]);
    return result.rowCount > 0;
  // let flag: boolean = false;
  // pool.query('SELECT * FROM usuarios WHERE email = $1 AND hash = $2', [email, hashUser], (error, results) => {
  //   if(error) {
  //     flag = false;
  //     return error;
  //   } else {
  //     flag = true;
  //   }
  // });

  // return flag;
}
