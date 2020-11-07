import { Controller, Get } from '@nestjs/common'
import { HealthCheckService } from './health-check.service'

@Controller('api')
export class HealthCheckController {
  constructor(private readonly service: HealthCheckService) {}

  @Get('health-check')
  public healthCheck() {
    return this.service.healthCheck()
  }
}
