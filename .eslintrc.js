module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "no-unused-vars": 1,
    "no-console": 0,
    "react/jsx-filename-extension": 0,
    "react/display-name": "off",
    "prettier/prettier": "error",
  },
};
