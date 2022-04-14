import { Express } from "express";
import { BrokerController } from "../controllers/Broker.controller";

export const brokerRoutes = (app: Express) => {
  app.post("/broker/register", BrokerController.create);
};
