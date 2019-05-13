import { User } from "./createuser";
import { pool } from '../';

export function receiveInfo(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let cpf = req.body.cpf;
  let birthDate = req.body.birthDate;
  let password = req.body.password;
  let role = req.body.role;

  let newUser = new User(name, email, cpf, birthDate, password, role);
  newUser.registerUser(res, pool);
}
