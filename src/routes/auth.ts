import {Express} from 'express';

import authMiddleware from '../middlewares/auth';

const auth = authMiddleware();

export const authRoutes = (app: Express) => {
  // app.post('/login', UserController.login);
};
