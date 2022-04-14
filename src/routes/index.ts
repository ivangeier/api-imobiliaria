import {Express} from 'express';
import {authRoutes} from './auth';
import {realEstateRoutes} from './RealEstate.routes';

import {userRoutes} from './User.routes';

export default (app: Express) => {
  app.get('/', (req, res) => {
    res.json({status: 'Success!'});
  });

  authRoutes(app);
  realEstateRoutes(app);
  userRoutes(app);
};
