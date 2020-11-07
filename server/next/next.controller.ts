import { All, Controller, Req, Res } from '@nestjs/common'
import { IncomingMessage, ServerResponse } from 'http'
import { NextService } from './next.service'

@Controller('')
export class NextController {
  constructor(private readonly nextService: NextService) {}

  @All()
  nextHandle(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    return this.nextService.nextHandle(req, res)
  }
}
