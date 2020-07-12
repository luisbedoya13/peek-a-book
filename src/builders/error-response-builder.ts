import { ErrorResponseBody } from '../types/responses.ts';

export class ErrorResponseBuilder {
  private error: ErrorResponseBody = {};

  private constructor() {
    this.error = {};
  }

  public static getInstance() {
    return new ErrorResponseBuilder();
  }

  public setStatus(status: number) {
    this.error.status = status;
    return this;
  }

  public setMessage(message: string) {
    this.error.message = message;
    return this;
  }

  public setDetail(detail: string) {
    this.error.detail = detail;
    return this;
  }

  public setReasons(reasons: string[]) {
    if (reasons.length) {
      this.error.reasons = reasons;
    }
    return this;
  }
}
