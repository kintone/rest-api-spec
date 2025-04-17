import presetsNodeTypescriptPrettier from "@cybozu/eslint-config/flat/presets/node-typescript-prettier.js";
import presetsTypescriptPrettier from "@cybozu/eslint-config/flat/presets/typescript-prettier.js";
import eslintPluginPackageJson from "eslint-plugin-package-json";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

/** @type {import("eslint").Linter.Config[]} */
export default tseslint.config([
  globalIgnores(["dist/", "public/kintone/"]),
  {
    extends: [presetsTypescriptPrettier],
    files: ["./src/**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    extends: [presetsNodeTypescriptPrettier],
    files: ["./*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],
    ignores: ["src/"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  eslintPluginPackageJson.configs.recommended,
]);
