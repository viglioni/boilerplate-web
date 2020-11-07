import { Module } from '@nestjs/common'
import { ApiController } from './api.controller'
import { ApiService } from './api.service'
import { HealthCheckController } from './health-check/health-check.controller'
import { HealthCheckService } from './health-check/health-check.service'

@Module({
  imports: [],
  controllers: [ApiController, HealthCheckController],
  providers: [ApiService, HealthCheckService],
})
export class ApiModule {}
