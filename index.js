module.exports = {
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  plugins: [
    'react',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      esversion: 9,
      destructuring: true,
      generators: true,
      superInFunctions: true,
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': 1,
    'react/jsx-props-no-spreading': 0,
    'implicit-arrow-linebreak': 0,
    'linebreak-style': 0,
    'eol-last': 0,
    'function-paren-newline': 0,
    'max-classes-per-file': 0,
    'no-underscore-dangle': 0,
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
  }
}
