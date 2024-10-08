import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsExtendFilter, AllExceptionsFilter, HttpExceptionFilter } from './filters';
import { DniPipe } from './pipes';

@Module({
    providers: [
        DniPipe
        //{ provide: APP_FILTER, useClass: AllExceptionsExtendFilter },
        // { provide: APP_FILTER, useClass: AllExceptionsFilter },
        // { provide: APP_FILTER, useClass: HttpExceptionFilter },
    ]
})
export class CommonModule {}
