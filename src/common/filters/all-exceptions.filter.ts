import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from "@nestjs/core";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {

    constructor(
        private readonly httpAdapaterHost: HttpAdapterHost
    ) {}

    catch(exception: any, host: ArgumentsHost) {

        const { httpAdapter } = this.httpAdapaterHost;
        const ctx = host.switchToHttp();

        const httpStatus = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        const responseBody = {
            statusCode: httpStatus,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
            message: 'AllExceptionsFilter: ' + exception.message || ''
        };

        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
}