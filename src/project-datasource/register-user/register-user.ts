import { User } from "../../signup/createuser";
import { calculateHash } from "../../project-api/login/calculate-hash";
import { pool } from "../../project-view";


export function registerUserDatasource(res, user: User) { //UserCreate
  let hashedPassword = calculateHash(user.password);
  pool.query('INSERT INTO usuarios (name, email, cpf, birthDate, hash, role) VALUES\
($1, $2, $3, $4, $5, $6) RETURNING name', [user.name, user.email, user.cpf, user.birthDate, hashedPassword, user.role])
  .then(after => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
      if(error)
        return error;
      else
        res.json(results.rows);
    })
  })
  .catch(error => {
    res.status(409).send(error);
  })
}
