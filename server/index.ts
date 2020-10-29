import express from 'express';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const isDev = process.env.NODE_ENV !== 'production';

const app = next({
  dev: isDev,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/health-check', (_, res) => res.send('OK'));
  server.get(['/_next/*', '/public/*'], (req, res) => handle(req, res));
  server.all('*', (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(
      `> Server listening at http://localhost:${port} as ${isDev ? 'development' : process.env.NODE_ENV
      }`,
    );
  });
});
