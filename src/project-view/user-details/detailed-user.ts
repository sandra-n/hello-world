import { getUserDetails } from '../../project-datasource/user-details/get-user-details';

export async function detailedUser(req, res) {

  let id: number = Number(req.params.id);
  const token = req.headers.authorization;

  getUserDetails(id, token, res);
    //nao emite hash
}
