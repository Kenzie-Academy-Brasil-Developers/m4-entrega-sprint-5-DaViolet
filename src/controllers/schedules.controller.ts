import { Request, Response } from "express";
import createSchedulesService from "../services/schedules/createSchedules.service";

export const createSchedulesController = async (req: Request, res: Response) => {
	const newSchedule = await createSchedulesService(req.body, req.user.id);
	return res.status(200).json(newSchedule);
};