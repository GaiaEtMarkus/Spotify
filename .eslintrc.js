module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/**', 'build/**'],
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
      },
    },
  ],
};
