import { userRepo } from '../../project-view/';
import { verifyToken } from '../../project-api/tokens/token';
import { User } from '../../entity/User';

export async function getUserDetails(id, token, res): Promise<User | undefined> {

  let result: User;
  if(await verifyToken(token, res)) {
    result = await userRepo.findOne({
      where: {
        id: id
      }
    })
  }
  res.json(result);
  return result;
  /*if(await verifyToken(token, res)) {
    pool.query('SELECT name, email, cpf, birthDate, role FROM usuarios LIMIT 1 OFFSET $1', [id], (error, results) => {
      if(error) {
        return error;
      } else {
        res.json(results.rows);
      }
    });
    //nao emite hash
  }
  else {
    res.status(401).send('You\'re not able to continue');
  }*/
}
