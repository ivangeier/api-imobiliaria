import { Express } from 'express';
import { BrokerController } from '../controllers/Broker.controller';
import authMiddleware from '../middlewares/auth';

const auth = authMiddleware();

export const brokerRoutes = (app: Express) => {
  app.get('/brokers', BrokerController.getAll);
  app.post('/broker/register', auth.authenticate(), BrokerController.create);
  app.delete('/broker/delete', BrokerController.deleteOne);
  app.get('/broker', BrokerController.getById);
  app.put('/broker/update', BrokerController.update);
};
