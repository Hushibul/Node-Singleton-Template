// easyResponse.middleware.ts
import { Request, Response, NextFunction } from 'express';
export const easyResponse = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  res.ok = (data: any) => {
    res.status(200);
    res.send({
      status: 'Success',
      code: 200,
      data,
      message: 'Request processed successfully.',
    });
    return;
  };

  res.badRequest = (error: any) => {
    res.status(400);
    res.send({
      status: 'Failed',
      code: 400,
      error,
      message: 'Bad request. Please check your request data.',
    });
    return;
  };

  res.unauthorized = (error: any) => {
    res.status(401);
    res.send({
      status: 'Failed',
      code: 401,
      error,
      message: 'Unauthorized access. Please provide valid credentials.',
    });
    return;
  };
  res.forbidden = (error: any) => {
    res.status(403);
    res.send({
      status: 'Failed',
      code: 403,
      error,
      message:
        "Access forbidden. You don't have permission to perform this action.",
    });
    return;
  };
  res.notFound = (error: any) => {
    res.status(404);
    res.send({
      status: 'Failed',
      code: 404,
      error,
      message: 'Resource not found.',
    });
    return;
  };
  res.conflict = (error: any) => {
    res.status(409);
    res.send({
      status: 'Failed',
      code: 409,
      error,
      message: 'Conflict. The resource is in a conflicting state.',
    });
    return;
  };
  res.validationError = (error: any) => {
    res.status(422);
    res.send({
      status: 'Failed',
      code: 422,
      error,
      message: 'Validation error. Please check your input.',
    });
    return;
  };

  res.internalServerError = (error: any) => {
    res.status(500);
    res.send({
      status: 'Failed',
      code: 500,
      error,
      message: 'Internal server error. Please try again later.',
    });
    return;
  };
  res.serviceUnavailable = (error: any) => {
    res.status(503);
    res.send({
      status: 'Failed',
      code: 503,
      error,
      message: 'Service temporarily unavailable. Please try again later.',
    });
    return;
  };

  return next();
};
