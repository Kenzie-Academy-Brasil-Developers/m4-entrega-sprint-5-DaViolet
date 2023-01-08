import { Router } from "express";
import { createSchedulesController } from "../controllers/schedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const scheduleRoutes = Router();

scheduleRoutes.post("", ensureAuthMiddleware, createSchedulesController);

export default scheduleRoutes;
