import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { NextModule } from './next/next.module';


@Module({
  imports: [
    ApiModule,
    NextModule // NextModule must be the LAST import!
  ],
  controllers: [],
  providers: [],
})
export class ServerModule { }
