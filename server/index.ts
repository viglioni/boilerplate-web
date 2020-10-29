import next from 'next';
import express from 'express'

const port = parseInt(process.env.PORT || '3000', 10);
const isDev = process.env.NODE_ENV !== 'production';

const app = next({
  dev: isDev,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/health-check', (_, res) => res.send('OK'));

  server.get('/metrics', (_, res) => res.status(404).end());

  server.get(['/_next/*', '/public/*'], (req, res) => handle(req, res));

  server.get('/contato', (req, res) => app.render(req, res, '/contact'));

  server.get(['/list', '/lista'], (req, res) => app.render(req, res, '/homes/list'));

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, () => {
    // eslint-disable-next-line jsx-control-statements/jsx-jcs-no-undef
    console.log(
      `> Server listening at http://localhost:${port} as ${isDev ? 'development' : process.env.NODE_ENV
      }`,
    );
  });
});
