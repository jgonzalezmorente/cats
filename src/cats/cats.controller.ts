import { Body, Controller, Get, Header, HttpCode, NotFoundException, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Observable, from, first } from 'rxjs';


export class CreateCatDto {
    name: string;
    age: number;
    breed: string;
  }

@Controller('cats')
export class CatsController {

    private cats = ['Yoko', 'Michi', 'Duque', 'Nala'];

    @Get()
    findAll(): string[] {
        return this.cats;
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        const cat = this.cats[id];
        if (!cat) throw new NotFoundException(`The cat by id ${id} not found`);
        return this.cats[id];
    }

    @Get()
    findAllObservable(): Observable<number> {
        return from([1,2,3]).pipe(first());
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return createCatDto;
    }

}
