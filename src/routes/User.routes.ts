import {Express} from 'express';
import {UserController} from '../controllers/User.controller';
import authMiddleware from '../middlewares/auth';

const auth = authMiddleware();

export const userRoutes = (app: Express) => {
  app.post('/user/register', UserController.create);
};
