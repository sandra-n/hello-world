import { dbSetup, serverSetup } from "../project-view/db-setup";

async() => {
  let con = await dbSetup();
  let ser = serverSetup();
}
