import { Express } from "express";
import { PropertyController } from "../controllers/Property.controller";

export const propertyRoutes = (app: Express) => {
  app.post("/property/register", PropertyController.create);
  app.get("/properties", PropertyController.getAll);
  app.get("/property/cities", PropertyController.getCity);
  app.get("/property/:id", PropertyController.getById);
  app.get("/property/search/price/", PropertyController.searchPrice);
  app.get("/property/search/type/:type", PropertyController.searchType);
  app.delete("/property/:id", PropertyController.deleteById);
};
