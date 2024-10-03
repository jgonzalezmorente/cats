import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CatsService } from '../cats.service';


@Injectable()
export class LoggerMiddelware implements NestMiddleware {

    constructor(private catsService: CatsService) {}

    use(req: Request, res: Response, next: NextFunction) {
        console.log('LoggerMiddelware');
        next();
    }

}


