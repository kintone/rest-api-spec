import presetsNodeTypescriptPrettier from "@cybozu/eslint-config/flat/presets/node-typescript-prettier.js";
import presetsReactTypescriptPrettier from "@cybozu/eslint-config/flat/presets/react-typescript-prettier.js";
import eslintPluginPackageJson from "eslint-plugin-package-json";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

/** @type {import("eslint").Linter.Config[]} */
export default tseslint.config([
  {
    extends: [presetsReactTypescriptPrettier],
    files: ["src/**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx,json}"],
  },
  {
    extends: [presetsNodeTypescriptPrettier],
    files: ["./*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    files: ["**/package.json"],
    ...eslintPluginPackageJson.configs.recommended,
    rules: {
      ...eslintPluginPackageJson.configs.recommended.rules,
      "@typescript-eslint/consistent-type-imports": "off",
    },
  },
]);
