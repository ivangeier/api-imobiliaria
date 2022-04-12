import {Express} from 'express';
import authMiddleware from '../middlewares/auth';
import {decrypt, encrypt} from '../utils/encrypt';
import {jwt} from '../utils/token';

const auth = authMiddleware();

export const authRoutes = (app: Express) => {
  // rotas de autenticação aqui.
};
