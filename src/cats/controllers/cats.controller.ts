import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import { CatsService } from '../providers';
import { CatDto, CreateCatDto } from '../dtos';
import { HttpExceptionFilter } from '../../common/filters';

@Controller('cats')
//@UseFilters(HttpExceptionFilter)
export class CatsController {

    constructor(
        private readonly catsService: CatsService
    ) {}

    @Get()
    //@UseFilters(HttpExceptionFilter)
    findAll(): CatDto[] {
        return this.catsService.findAll();
    }

    @Get('/error')
    error() {
        throw new Error('Prueba de error no HTTP');
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.catsService.findById(+id);
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto);
        return this.catsService.createCat(createCatDto);
    }

}
