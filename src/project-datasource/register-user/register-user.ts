import { calculateHash } from "../../project-api/login/calculate-hash";
import { userRepo } from "../../project-view/db-setup";
import { UserSignedUp } from "../../project-api/user/user-signed-up";
import { User } from "../../entity/User";



export async function registerUserDatasource(user: UserSignedUp): Promise<string> { //UserCreate

  let hashedPassword = calculateHash(user.password);

  const result = await userRepo.createQueryBuilder("User").insert().into(User).values({
    name: user.name,
    email: user.email,
    birthDate: user.birthDate,
    role: user.role,
    hash: hashedPassword,
    cpf: user.cpf
  }).execute();

  const newUser = await userRepo.findOne({
    where: {
      name: user.name,
      email: user.email,
      hash: hashedPassword
    }
  })
  return newUser.cpf;
  /*let hashedPassword = calculateHash(user.password);
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
  */
}
// module.exports = registerUserDatasource;
