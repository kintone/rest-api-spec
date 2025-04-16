import type { SwaggerUIPlugin } from "swagger-ui";
import swaggerUI from "swagger-ui";

import swaggerUIStandalonePreset from "swagger-ui/dist/swagger-ui-standalone-preset";
import "swagger-ui/dist/swagger-ui.css";

// @ts-ignore
// Swagger UI actually has presets property but @types/swagger-ui does not.
// ref. https://github.com/swagger-api/swagger-ui/blob/fceaec605072fbc717a04895bd19814d9a1c8e6d/src/core/index.js#L141
const apisPreset = swaggerUI.presets.apis as SwaggerUIPlugin;
console.log(import.meta.env.OAS_ENTRY_FILE_PATHS);

swaggerUI({
  dom_id: "#root",
  // url: import.meta.env.OAS_ENTRY_FILE_PATHS[0],
  urls: import.meta.env.OAS_ENTRY_FILE_PATHS.map((p) => ({
    name: p,
    url: p,
  })),
  deepLinking: true,
  // https://github.com/swagger-api/swagger-ui/issues/7895
  presets: [apisPreset, swaggerUIStandalonePreset],
  layout: "StandaloneLayout",
});
