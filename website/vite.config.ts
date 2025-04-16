import "./src/vite-env.d.ts";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { glob } from "glob";
import path from "node:path";

const files = (
  await glob(path.resolve(__dirname, "..", "kintone/**/openapi.yaml"))
).map((p) => path.relative(path.join(__dirname, "public"), p));

console.log(files);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.OAS_ENTRY_FILE_PATHS":
      files satisfies ImportMetaEnv["OAS_ENTRY_FILE_PATHS"],
  },
});
