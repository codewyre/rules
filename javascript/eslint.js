const path = require('path');

module.exports = (_) => ({
  env: { node: true },
  extends: ['eslint:recommended'],
  rules: {
    'max-len': [
      "error", {
        "code": 140
      }
    ],
    'no-console': 'error',
    'no-debugger': 'error'
  },
});