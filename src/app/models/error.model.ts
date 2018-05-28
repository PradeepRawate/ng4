export class Error {
  msg: string;
  isError: boolean;
  statusCode: string;
  redirectUrl: string;

  constructor(msg: string, isError: boolean, statusCode: string, redirectUrl: string) {
    this.msg = msg;
    this.isError = isError;
    this.statusCode = statusCode;
    this.redirectUrl = redirectUrl;
  }
}
