import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default {
  root: true,
  ignorePatterns: ["dist"], // Ignore the dist folder
  overrides: [
    {
      files: ["**/*.{ts,tsx}"], // Apply these rules to TS and TSX files
      parser: "@typescript-eslint/parser", // Use TypeScript parser
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable parsing of JSX
        },
        project: "./tsconfig.json", // Ensure the tsconfig.json path is correct
      },
      plugins: [
        "react", // React plugin
        "react-hooks", // React Hooks plugin
        "react-refresh", // React Refresh plugin
        "@typescript-eslint", // TypeScript plugin
      ],
      extends: [
        "eslint:recommended", // ESLint recommended rules
        "plugin:react/recommended", // React recommended rules
        "plugin:react-hooks/recommended", // React Hooks recommended rules
        "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
      ],
      rules: {
        "react/react-in-jsx-scope": "off", // Disable React-in-JSX-scope rule for Next.js
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
        "@typescript-eslint/no-explicit-any": "error", // Disallow the use of `any`
        "@typescript-eslint/explicit-module-boundary-types": "warn", // Warn for missing return types
        "no-unused-vars": [
          "warn",
          { varsIgnorePattern: "^React$", argsIgnorePattern: "^_" },
        ],
      },
      settings: {
        react: {
          version: "detect", // Automatically detect React version
        },
      },
    },
  ],
};
