import { getErrorMessage } from "@/utils";
import { NextFunction, Request, Response } from "express";

const errorHandler = (
	err: unknown,
	_: Request,
	res: Response,
	next: NextFunction
) => {
	// Development error handling
	if (res.headersSent || process.env.NODE_ENV === "development") {
		next(err);
		return;
	}

	// Production error handling
	res.status(500).json({
		error: {
			message: getErrorMessage(err) || "Internal Server Error",
		},
	});
};

export default errorHandler;
