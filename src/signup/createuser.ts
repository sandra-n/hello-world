import { calculateHash } from '../project-api/login/calculate-hash';


export class User {
  name: string;
  email: string;
  cpf: number;
  birthDate: string; //YYYY-MM-DD
  password: string;
  role: string;

  constructor(nameP: string, emailP: string, cpfP: number, birthDateP: string, passwordP: string, roleP: string) {
    this.name = nameP;
    this.email = emailP;
    this.cpf = cpfP;
    this.birthDate = birthDateP;
    this.password = passwordP;
    this.role = roleP;
  }
}

export function registerUser(res, user: User) { //UserCreate
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


/*
export class User {
  name: string;
  email: string;
  cpf: number;
  birthDate: string; //YYYY-MM-DD
  password: string;
  role: string;

  constructor(nameP: string, emailP: string, cpfP: number, birthDateP: string, passwordP: string, roleP: string) {
    this.name = nameP;
    this.email = emailP;
    this.cpf = cpfP;
    this.birthDate = birthDateP;
    this.password = passwordP;
    this.role = roleP;
  }

  registerUser(res, pool) { //UserCreate
    let hashedPassword = calculateHash(this.password);
    pool.query('INSERT INTO usuarios (name, email, cpf, birthDate, hash, role) VALUES\
($1, $2, $3, $4, $5, $6) RETURNING name', [this.name, this.email, this.cpf, this.birthDate, hashedPassword, this.role])
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
}
*/
