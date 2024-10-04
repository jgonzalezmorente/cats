import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto, CreateCatDto } from './dtos';
@Controller('cats')
export class CatsController {

    constructor(
        private readonly catsService: CatsService
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
        console.log(createCatDto);
        return this.catsService.createCat(createCatDto);
    }

}
