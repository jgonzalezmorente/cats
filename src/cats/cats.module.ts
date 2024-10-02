import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsServiceService } from './cats-service.service';

@Module({
    controllers: [CatsController],
    //providers: [CatsServiceService],
    exports: [CatsServiceService]
})
export class CatsModule {
    constructor(private catsService: CatsServiceService) {
        catsService.baseUrl = 'http:kñjafñdlkj'
    }
}
