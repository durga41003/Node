import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const HandleGlobalError = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
};
