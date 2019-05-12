import { pool } from '../index';

export function getList(req, res) {

  let fromA: number = Number(req.query.fromA);
  if (isNaN(fromA)) {
    fromA = 0;
  }
  let numberResults: number = Number(req.query.numberResults);
  if (isNaN(numberResults)){
    numberResults = 10;
  }

  pool.query('SELECT email, name FROM usuarios ORDER BY name LIMIT $1 OFFSET $2', [numberResults, fromA], (error, results) => {
    if(error) {
      throw error;
    } else {
      res.json(results.rows);
    }
  });
}

//machado.assis@gmail.com: m5678
//sandra.nihama@taqtile.com: 1234
//fulano.tal@taqtile.com: 9999
//jorge.amado@gmail.com: jorge4
//carlos.drummond@outlook.com: 4002
