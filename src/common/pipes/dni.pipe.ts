import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";


@Injectable()
export class DniPipe implements PipeTransform {

    transform(value: string, metadata: ArgumentMetadata) {
        console.log({ value, metadata });
        const dniLength = value.length;
        if (dniLength === 9) {
            return value
        }
        throw new BadRequestException(`DNI ${value} no válido`);
    }
}