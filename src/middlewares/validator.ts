import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { AppError } from '../utils/AppError';
import { NextFunction, Request, RequestHandler, Response } from 'express';

function dtoValidationMiddleware(type: ClassConstructor<any>): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObj = plainToClass(type, req.body);
    const errors: ValidationError[] = await validate(dtoObj, {
      whitelist: true,
    });

    if (errors.length > 0) {
      const dtoErrors = errors
        .map((error: ValidationError) =>
          Object.values(error.constraints || []).join(', ')
        )
        .join(', ');

      const details = errors.map(({ property, constraints, value }) => ({
        property,
        constraints,
        value,
      }));

      next(new AppError({ httpCode: 422, message: dtoErrors, details }));
    }

    req.body = dtoObj;
    next();
  };
}

export default dtoValidationMiddleware;
