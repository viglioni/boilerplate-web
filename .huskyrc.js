const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit': tasks([]),
    'pre-push': tasks([
      "yarn test",
    ])
  }
}
