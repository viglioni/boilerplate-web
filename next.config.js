/* eslint @typescript-eslint/no-var-requires: "off" */
const publicConfig = require('./src/public.config.js')
const serverConfig = require('./src/server.config.js')

const nextConfig = {
  distDir: '.next',
  publicRuntimeConfig: publicConfig,
  serverRuntimeConfig: serverConfig,
}

module.exports = nextConfig
