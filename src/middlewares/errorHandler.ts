import { NextFunction, Request, Response } from 'express';

export class ErrorHandler {
  private static errorHandlerInstance: ErrorHandler;
  public static getInstance() {
    if (!this.errorHandlerInstance) {
      this.errorHandlerInstance = new ErrorHandler();
    }
    return this.errorHandlerInstance;
  }

  public handleError = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log('Middleware Error Hadnling', err);
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
      stack: process.env.NODE_ENV === 'development' ? err.stack : {},
    });
  };
}
