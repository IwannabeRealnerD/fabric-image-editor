module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: { browser: true, es2020: true },
  extends: ["eslint-config-khanne-react-lint"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  // parser: "@typescript-eslint/parser",
  // plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
