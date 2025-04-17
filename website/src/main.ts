import type { SwaggerUIPlugin } from "swagger-ui";
import swaggerUI from "swagger-ui";

import swaggerUIStandalonePreset from "swagger-ui/dist/swagger-ui-standalone-preset";
import "swagger-ui/dist/swagger-ui.css";
import "./style.css";

// @ts-ignore
// Swagger UI actually has presets property but @types/swagger-ui does not.
// ref. https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/72525
const apisPreset = swaggerUI.presets.apis as SwaggerUIPlugin;

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
