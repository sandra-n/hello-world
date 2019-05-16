import { calculateHash } from './calculate-hash';
import { setToken } from '../tokens/token';
import { setRefreshToken } from '../refreshtoken/refreshtoken';
import { checkUserLoginDatasource } from '../../project-datasource/login';

export function logUser(email: string, password: string) { //Use Case
  const hashUser = calculateHash(password);
  if(checkUserLoginDatasource(email, hashUser)) {
    createTokens(email);
  }
}

function createTokens(email: string) { //"Use Case"
  setToken(email);
  setRefreshToken(email);
}
