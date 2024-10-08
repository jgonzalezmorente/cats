import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';


export class ZodValidationPipe implements PipeTransform {

    constructor(private schema: ZodSchema) {}

    transform(value: any, metadata: ArgumentMetadata) {
        try {
            const parsedValue = this.schema.parse(value);
            return parsedValue;
        } catch (error) {
            //console.log({value, metadata, error});
            console.log(error.errors[0]);
            const { code, expected, path } = error.errors[0];

            throw new BadRequestException(`Error: ${ code } - ${path[0]}`);
        }

    }
}