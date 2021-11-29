require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "plugin:mdx/recommended",
    "plugin:cypress/recommended",
    "plugin:import/recommended",
  ],
  plugins: ["react", "prettier", "module-resolver", "cypress"],
  parserOptions: {
    parserOptions: { tsconfigRootDir: __dirname },
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      esversion: 9,
      destructuring: true,
      generators: true,
      superInFunctions: true,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    "func-names": 0,
    "no-restricted-exports": 0,
    "prettier/prettier": 1,
    "react/jsx-props-no-spreading": 0,
    "implicit-arrow-linebreak": 0,
    "linebreak-style": 0,
    "eol-last": 0,
    "react/function-component-definition": 0,
    "function-paren-newline": 0,
    "max-classes-per-file": 0,
    "no-underscore-dangle": 0,
    "react/no-array-index-key": 0,
    "import/default": 0,
    "import/prefer-default-export": 0,
    "import/no-duplicates": 0,
    "import/extensions": 0,
    "import/no-named-as-default": 0,
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
      },
    ],
  },
  overrides: [
    {
      files: ["*.stories.*", "*.test.*"],
      rules: {
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "no-alert": 0,
      },
    },
  ],
};
