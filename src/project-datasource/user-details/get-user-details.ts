//import { userRepo } from '../../project-view/db-setup';
import { verifyToken } from '../../project-api/tokens/token';
import { User } from '../../entity/User';
import { getConnection } from 'typeorm';
import { Tag } from '../../entity/Tag';

export async function getUserDetails(id, token, res): Promise<User | undefined> {

  const userRepo = getConnection().getRepository(User);
  const tagRepo = getConnection().getRepository(Tag);
  let result: User;
  if(await verifyToken(token, res)) {
    result = await userRepo.createQueryBuilder("user").leftJoinAndSelect("user.tags", "tags").where('"user"."id" = :id', {id}).getOne();
    // result = await userRepo.findOne({
    //   where: {
    //     id: id
    //   }
    // })
  }
  res.json(result);
  console.log('resultados: ', result.tags);
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
