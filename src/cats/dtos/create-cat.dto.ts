import { IsString } from "class-validator";

export class CreateCatDto {

    @IsString()
    name: string;

    age: number;
    breed: string;
  }
