export class UserSignedUp {
  name: string;
  email: string;
  cpf: string;
  birthDate: string; //YYYY-MM-DD
  password: string;
  role: string;

  constructor(nameP: string, emailP: string, cpfP: string, birthDateP: string, passwordP: string, roleP: string) {
    this.name = nameP;
    this.email = emailP;
    this.cpf = cpfP;
    this.birthDate = birthDateP;
    this.password = passwordP;
    this.role = roleP;
  }
}
