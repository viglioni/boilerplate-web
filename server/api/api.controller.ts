import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  constructor() { }

  @Get('health-check')
  public async healthCheck() {
    return "It's working!"
  }
}
