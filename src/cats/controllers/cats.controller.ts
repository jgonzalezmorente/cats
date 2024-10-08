import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Post, Query, UseFilters, UsePipes } from '@nestjs/common';
import { CatsService } from '../providers';
import { CatDto, CreateCatDto } from '../dtos';
import { HttpExceptionFilter } from '../../common/filters';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';
import { DniPipe } from '../../common/pipes';
import { createCatSchema } from '../../common/schema';

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

    @Get('/query-param')
    queryParam(
        @Query('id', new ParseIntPipe({ optional: true })) id: number = 1
    ) {
        return this.catsService.findById(id);
    }

    @Get('/uuid/:uuid')
    getUUID(
        @Param('uuid', new ParseUUIDPipe()) uuid: string
    ) {
        return { uuid };
    }

    @Get('/dni')
    getDNI(
        @Query('dni', DniPipe) dni: string
    ) {
        return { dni };
    }


    @Get(':id')
    findById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.FORBIDDEN })) id: number) {
        console.log({id, type: typeof id});
        return this.catsService.findById(+id);
    }

    @Post()
    //@UsePipes( new ZodValidationPipe(createCatSchema))
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto);
        return this.catsService.createCat(createCatDto);
    }

}
