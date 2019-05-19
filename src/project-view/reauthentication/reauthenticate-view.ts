import { reauthenticateDatasource } from "../../project-datasource/reauthentication/reauthenticate-datasource";

export async function reauthenticateView(req, res) {
  const refreshToken = req.headers.authorization;
  await reauthenticateDatasource(res, refreshToken);
}
