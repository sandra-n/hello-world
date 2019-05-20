import { UserSignedUp } from "../../project-api/user/user-signed-up";
import { registerUserDatasource } from "../../project-datasource/register-user/register-user";

export function createUserView(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let cpf = req.body.cpf;
  let birthDate = req.body.birthDate;
  let password = req.body.password;
  let role = req.body.role;

  let newUser = new UserSignedUp(name, email, cpf, birthDate, password, role);
  //registerUserDatasource(res, newUser);
  return registerUserDatasource(newUser);
}
