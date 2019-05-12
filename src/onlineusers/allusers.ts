import { pool } from '../index';

export function getList(req, res) {

  let users: string[];
  users = [];
  pool.query('SELECT name, email FROM usuarios', (error, results) => {
    if(error) {
      throw error;
    } else {
      let finalResults = JSON.parse(JSON.stringify(results));
      users.push(finalResults.rows);
      res.json(users);
    }
  });
}
//machado.assis@gmail.com: m5678
//sandra.nihama@taqtile.com: 1234
//fulano.tal@taqtile.com: 9999
//jorge.amado@gmail.com: jorge4
//carlos.drummond@outlook.com: 4002
