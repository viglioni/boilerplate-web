import { Controller, All, Req, Res } from '@nestjs/common';
import { IncomingMessage, ServerResponse } from 'http';
import { handle } from '../next.app';

@Controller()
export class NextController {
  constructor() { }

  @All()
  nextHandle(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    return handle(req, res)
  }
}
