const presets = ['next/babel']
const plugins = ['@babel/plugin-transform-typescript', ['@babel/plugin-proposal-decorators', { "legacy": true }]]

module.exports = { presets, plugins }
