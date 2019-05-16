import { getUsersListAPI } from "../../project-api/users-list/get-users-list-api";

export function getUsersListView(req, res) {
  const token = req.headers.authorization;
  const offset = req.query.offset;
  const numberResults = req.query.numberResults;
  getUsersListAPI(res, token, offset, numberResults);
}
