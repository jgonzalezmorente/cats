import { Injectable } from '@nestjs/common';
import { CatDto, CreateCatDto } from 'src/cats/dtos';

@Injectable()
export class CatsService {

    private _baseUrl: string = '';

    private readonly cats: CatDto[] = [
        {
            id: 1,
            name: 'Duque',
            age: 2,
            breed: 'common'
        },
        {
            id: 2,
            name: 'Nala',
            age: 5,
            breed: 'common'
        }

    ];

    set baseUrl(url: string) {
        this._baseUrl = url;
    }


    findAll(): CatDto[] {
        return this.cats;
    }

    findById(id: number) {
        const cat = this.cats.find(cat => cat.id === id);
        return cat;
    }

    createCat(cat: CreateCatDto): CatDto {
        const lastCat = this.cats[this.cats.length - 1];
        const newCat = {
            id: lastCat.id + 1,
            ...cat
        };
        this.cats.push(newCat);
        delete newCat.id
        return newCat;
    }



}
