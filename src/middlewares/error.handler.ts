import {NextFunction, Request, Response} from "express";

export const errorHandler = (_err: Error, _req: Request, res: Response, next: NextFunction) => {
    res.status(500).send("Internal Server Error");
    next();
}
