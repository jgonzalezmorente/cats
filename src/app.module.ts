import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    CatsModule,
    CommonModule
  ],
})
export class AppModule {}
