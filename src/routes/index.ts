import {Express} from 'express';
import {authRoutes} from './auth';

export default (app: Express) => {
  app.get('/', (req, res) => {
    res.json({status: 'Success!'});
  });

  authRoutes(app);
};
