import jwt_simple from 'jwt-simple';
import config from '../middlewares/auth/config';

const decode = (req:any) => {
  const token = req.headers.authorization.split(' ')[1];
  return jwt_simple.decode(token, config.jwtSecret!);
};

const encode = (payload: any) => {
  return jwt_simple.encode(payload, config.jwtSecret!);
};

export const jwt = {
  decode,
  encode,
};
