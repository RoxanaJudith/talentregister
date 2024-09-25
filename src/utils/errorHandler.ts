import { NextFunction, Request, Response } from 'express';
import { AppError } from './AppError';

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(err?.httpCode || 500).json({
    message: err?.message || 'Internal Server Error',
    httpCode: err?.httpCode || 500,
    details: err?.details
  });
};
