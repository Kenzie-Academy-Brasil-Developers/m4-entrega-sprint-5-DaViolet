import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError";

const ensureIsAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {

	if (req.user.isAdm) {
		return next();
	} else {
	throw new AppError("User is not admin.", 403);
    }
}
export default ensureIsAdmMiddleware;
