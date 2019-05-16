import { calculateHash } from './calculate-hash';
import { setToken } from '../tokens/token';
import { setRefreshToken } from '../refreshtoken/refreshtoken';
import { checkUserLoginDatasource } from '../../project-datasource/login/login';

export function logUser(email: string, password: string, res) { //Use Case
  const hashUser = calculateHash(password);
  if(checkUserLoginDatasource(email, hashUser)) {
    createTokens(email, res);
  }
}

function createTokens(email: string, res) { //"Use Case"
  let token = setToken(email);
  res.status(200).json(token);
  setRefreshToken(email);
}
