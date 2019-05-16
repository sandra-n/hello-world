import { reauthenticateDatasource } from "../../project-datasource/reauthentication/reauthenticate-datasource";

export function reauthenticateView(req, res) {
  const refreshToken = req.headers.authorization;
  reauthenticateDatasource(res, refreshToken);
}
