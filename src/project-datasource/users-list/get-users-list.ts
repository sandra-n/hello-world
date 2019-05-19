import { userRepo } from '../../project-view/'
import { User } from '../../entity/User';

export async function getUsersInList(offset: number = 0, numberResults: number = 10, res): Promise<User[]> {

  const result = await userRepo.find({
    order: {
      id: "ASC"
    },
    skip: offset,
    take: numberResults
  })
  res.json(result);
  return result;
  /*pool.query('SELECT email, name FROM usuarios ORDER BY name LIMIT $1 OFFSET $2', [numberResults, offset], (error, results) => {
    if(error) {
      throw error;
    } else {
      res.json(results.rows);
    }
  });
  */
}
