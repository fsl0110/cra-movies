module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'sonarjs', 'jsx-a11y', 'testing-library', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['src/**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
    },
  ],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'multiline-ternary': 0,
    'semi': 0, // see @typescript-eslint/semi
    'no-use-before-define': 0, // @typescript-eslint/no-use-before-define
    'no-unused-vars': 0, // see @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-use-before-define': 2, // needs "no-use-before-define": 0,
    '@typescript-eslint/semi': 2, // needs "semi": 0,
    '@typescript-eslint/no-unused-vars': 2, // needs "no-unused-vars": 0,
    '@typescript-eslint/member-delimiter-style': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    'react/prop-types': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'sonarjs/prefer-immediate-return': 0,
    'sonarjs/cognitive-complexity': 1,
    'sonarjs/no-duplicate-string': 0,
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true, // react-i18next.d.ts
      },
    ],
    'jsx-a11y/no-onchange': 0, // deprecated
  },
};
