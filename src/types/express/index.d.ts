export {};

declare global {
  namespace Express {
    export interface Response {
      ok?: any;
      badRequest?: any;
      unauthorized?: any;
      forbidden?: any;
      notFound?: any;
      internalServerError?: any;
      validationError?: any;
      conflict?: any;
      serviceUnavailable?: any;
    }
  }
}
