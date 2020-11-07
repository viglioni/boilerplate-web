import { Injectable } from '@nestjs/common'
import { always } from 'ramda'

@Injectable()
export class HealthCheckService {
  public healthCheck = always("It's working!!!")
}
