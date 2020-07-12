import { Middleware, isHttpError, Status } from 'https://deno.land/x/oak/mod.ts';
import { ErrorResponseBuilder } from '../builders/error-response-builder.ts';

export const errorsMiddleware: Middleware = async (context, next) => {
  try {
    await next();
  } catch (e) {
    if (isHttpError(e)) {
      switch (e.status) {
        case Status.NotFound:
          context.response.status = Status.NotFound;
          context.response.body = ErrorResponseBuilder.getInstance()
            .setStatus(Status.NotFound)
            .setMessage('resource not found');
          break;
        case Status.BadGateway:
          context.response.status = Status.BadGateway;
          context.response.body = ErrorResponseBuilder.getInstance()
            .setStatus(Status.BadGateway)
            .setMessage(e.message);
      }
    } else {
      // rethrow mishandling errors
      throw e;
    }
  }
};
