module.exports = {
  extends: '@antfu',
  plugins: ['no-autofix'],
  rules: {
    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],

    'unused-imports/no-unused-imports': 'off', // look below
    'no-autofix/unused-imports/no-unused-imports': 'error',
  },
}
