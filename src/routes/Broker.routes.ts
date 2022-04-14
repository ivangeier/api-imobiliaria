import { Express } from "express";
import { BrokerController } from "../controllers/Broker.controller";

export const brokerRoutes = (app: Express) => {
  app.post("/broker/register", BrokerController.create);
  app.delete("/broker/delete", BrokerController.deleteOne);
  app.get("/broker", BrokerController.getById);
  app.put("/broker/update", BrokerController.update);
};
