import "./src/vite-env.d.ts";

import { defineConfig } from "vite";

import { glob } from "glob";
import path from "node:path";

const files = (
  await glob(
    path.resolve(__dirname, "public", "kintone/*/bundled/openapi.yaml"),
  )
).map((p) => path.relative(path.join(__dirname, "public"), p));

// https://vite.dev/config/
export default defineConfig({
  base: "/rest-api-spec/",
  define: {
    "import.meta.env.OAS_ENTRY_FILE_PATHS":
      files satisfies ImportMetaEnv["OAS_ENTRY_FILE_PATHS"],
  },
});
