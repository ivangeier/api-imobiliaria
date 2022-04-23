import { Express } from "express";
import { PropertyController } from "../controllers/Property.controller";

export const propertyRoutes = (app: Express) => {
  app.post("/property/register", PropertyController.create);
  app.get("/properties", PropertyController.getAll);
  app.get("/property/cities", PropertyController.getCity);
  app.get("/property/:id", PropertyController.getById);
  app.delete("/property/:id", PropertyController.deleteById);
};
