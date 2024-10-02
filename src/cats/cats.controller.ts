import { Body, Controller, Get, Header, HttpCode, NotFoundException, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { CatsServiceService } from './cats-service.service';
import { CatDto, CreateCatDto } from './dtos';


@Controller('cats')
export class CatsController {

    constructor(
        private readonly catsService: CatsServiceService
    ) {}

    @Get()
    findAll(): CatDto[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.catsService.findById(+id);
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return this.catsService.createCat(createCatDto);
    }

}
