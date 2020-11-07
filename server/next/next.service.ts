import { Injectable } from '@nestjs/common'
import { handle } from '../next.app'

@Injectable()
export class NextService {
  public nextHandle = handle
}
