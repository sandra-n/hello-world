import { userRepo } from '../../project-view/db-setup';
import { verifyRefreshToken, setRefreshToken } from '../../project-api/refreshtoken/refreshtoken';
import { setToken } from '../../project-api/tokens/token';
import { User } from '../../entity/User';

export async function reauthenticateDatasource(res, completeRefreshToken: string): Promise<User | undefined>{
  let refreshToken = completeRefreshToken.split(" ", 2)[1];
  const result = await userRepo.findOne({
    where: {
      refreshToken: refreshToken
    }
  })
  let userToken: string;
  let userRefreshToken: string;

  if(result) {
    let email: string = result.email;
    if(await verifyRefreshToken(refreshToken, res)) {
      userToken = setToken(email);
      userRefreshToken = await setRefreshToken(email);
      res.status(200).json({userToken: userToken, userRefreshToken: userRefreshToken});
    }
    else {
      res.status(401).json("Unauthorized");
    }
  }
  else {
    res.status(404).json("User not found");
  }
  return result;
}
