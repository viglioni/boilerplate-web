import express from 'express';
import next from 'next';
import { always, identity, ifElse, or } from 'ramda';
import { notEquals } from '../src/helpers/logic'
import { concatAll } from '../src/helpers/string'

const env = process.env.NODE_ENV
const port = parseInt(or(process.env.PORT, '3000') as string);
const dev = notEquals(env, 'production')
const app = next({ dev });


const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get('/health-check', (_, res) => res.send("It's working!!!"));
  server.all('*', (req, res) => handle(req, res));
  server.listen(port, () => {
    console.log(
      concatAll("Server listening @ port ", port, " as ", ifElse(identity, always("dev"), always(env))(dev))
    );
  });
});

