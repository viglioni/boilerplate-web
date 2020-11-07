import { NestFactory } from '@nestjs/core'
import { always, identity, ifElse, or } from 'ramda'
import { notEquals } from '../src/helpers/logic'
import { concatAll } from '../src/helpers/string'
import { nextApp } from './next.app'
import { ServerModule } from './server.module'

const env = process.env.NODE_ENV
const port = parseInt(or(process.env.PORT, '3000') as string)
const dev = notEquals(env, 'production')

async function bootstrap() {
  const server = await NestFactory.create(ServerModule)
  server.enableCors()
  await server.listen(port)
  console.log(
    concatAll(
      'Server listening @ port ',
      port,
      ' as ',
      ifElse(identity, always('dev'), always(env))(dev),
    ),
  )
}

nextApp.prepare().then(() => {
  bootstrap()
})
