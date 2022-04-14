import {Express} from 'express';
import {RealEstateController} from '../controllers/RealEstate.controller';
import authMiddleware from '../middlewares/auth';

const auth = authMiddleware();

export const realEstateRoutes = (app: Express) => {
  app.post('/realestate/register', RealEstateController.create);
  app.delete(
    '/realestate/delete',
    auth.authenticate(),
    RealEstateController.deleteOne
  );
  app.put(
    '/realestate/update',
    auth.authenticate(),
    RealEstateController.updateAll
  );
};
