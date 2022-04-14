import {Express} from 'express';
import {UserController} from '../controllers/User.controller';
import authMiddleware from '../middlewares/auth';

const auth = authMiddleware();

export const userRoutes = (app: Express) => {
  app.get('/users', UserController.getAll);
  app.get('/user/', auth.authenticate(), UserController.getById);
  app.post('/user/register', UserController.create);
  app.patch(
    '/user/password',
    auth.authenticate(),
    UserController.passwordUpdate
  );
  app.put('/user/update', auth.authenticate(), UserController.updateAll);
  app.delete('/user/delete', auth.authenticate(), UserController.deleteOne);
};
