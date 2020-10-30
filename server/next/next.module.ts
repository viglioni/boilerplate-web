import { Module } from '@nestjs/common';
import { NextController } from './next.controller';

@Module({
  controllers: [NextController]
})
export class NextModule {}
