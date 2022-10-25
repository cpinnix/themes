export default {
  env: {
    browser: true,
    es2021: true
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {}
};
export const extends = ["plugin:storybook/recommended"];