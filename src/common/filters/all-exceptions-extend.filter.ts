import { ArgumentsHost, Catch, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';



@Catch()
export class AllExceptionsExtendFilter extends BaseExceptionFilter {

    private readonly logger = new Logger(AllExceptionsExtendFilter.name);

    catch(exception: any, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        this.logger.error(`Excepción capturada: ${ exception.message }`);
        if (exception instanceof HttpException) {
            const exceptionResponse = exception.getResponse();
            response.status(status).json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                customMessage: 'Este es un mensaje personalizado',
                exceptionResponse
            });

        } else {
            super.catch(exception, host);
        }
    }

}