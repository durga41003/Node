import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const validateEmployee = (req: Request, res: Response, next: NextFunction) => {
  const { firstname, lastname, empID } = req.body;

  if (!firstname || !lastname || !empID) {
    return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Invalid employee data' });
  }

  next();
};
