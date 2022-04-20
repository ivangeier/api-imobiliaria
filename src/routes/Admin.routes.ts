import { Express } from "express";
import { AdminController } from "../controllers/Admin.controller";
import authMiddleware from '../middlewares/auth';

const auth = authMiddleware();

export const adminRoutes = (app: Express) => {
   app.get('/admin/status', auth.authenticate(), AdminController.getStatus);
}
