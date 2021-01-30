module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-this-alias': 'off',
    'no-unused-expressions': 'off',
    'array-callback-return': 'off',
    'no-param-reassign': 'off',
    'import/no-cycle': 'off',
    'prefer-destructuring': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    'no-return-assign': 'off',
    'import/no-named-as-default': 0,
    'func-names': 0,
    'object-shorthand': 0,
    'space-before-function-paren': 0,
    'import/prefer-default-export': 'off',
    'arrow-parens': 0,
    'no-plusplus': 'off',
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'no-console': 0,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
