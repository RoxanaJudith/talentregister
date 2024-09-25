import { ValidationError } from "class-validator";

interface AppErrorArgs {
  message?: string;
  httpCode: number;
  details?: Array<ValidationError>;
}

export class AppError extends Error {
  public readonly httpCode: number;
  public readonly details?: Array<ValidationError>;

  constructor({ message, httpCode, details }: AppErrorArgs) {
    super(message);
    this.httpCode = httpCode;
    this.details = details;
    Error.captureStackTrace(this);
  }
}
