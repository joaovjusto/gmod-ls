module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    'func-names': 0,
    'object-shorthand': 0,
    'space-before-function-paren': 0,
    'import/prefer-default-export': 'off',
    'arrow-parens': 0,
    'no-plusplus': 'off'
  },
};
