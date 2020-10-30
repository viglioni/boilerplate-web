import { Module } from '@nestjs/common';
import { NextController } from './next.controller'


@Module({
  imports: [],
  controllers: [NextController],
  providers: [],
})
export class NextModule { }
