module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: "detect" },
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "import", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "react/prop-types": "off",
    "import/no-unresolved": "error",
    "react/react-in-jsx-scope": "off",
    "import/no-absolute-path": "error",
    "import/no-useless-path-segments": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};
